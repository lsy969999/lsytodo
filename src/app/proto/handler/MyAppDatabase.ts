import Dexie from "dexie";

export interface IEmailAddress {
    id?: number;
    contactId: number;
    type: string;
    email: string;
}


export interface IPhoneNumber {
    id?: number;
    contactId: number;
    type: string;
    phone: string;
}

export class MyAppDatabase extends Dexie{
    contacts!: Dexie.Table<Contact, number>
    emails!: Dexie.Table<IEmailAddress, number>
    phones!: Dexie.Table<IPhoneNumber, number>
    constructor(){
        super("ContactsDatabase")
        var db = this;
        db.version(1).stores({
            contacts: '++id, firstName, lastName',
            emails: '++id, contactId, type, email',
            phones: '++id, contactId, type, phone',
        });
        // db.contacts.mapToClass(Contact)
    }
}

export var db = new MyAppDatabase();

export class Contact {
    id?: number;
    firstName: string;
    lastName: string;
    emails?: IEmailAddress[];
    phones?: IPhoneNumber[];
    constructor(first: string, last: string, id?: number){
        this.firstName = first
        this.lastName = last
        if(id) this.id = id;
        Object.defineProperties(this, {
            emails: {value: [], enumerable: false, writable: true },
            phones: {value: [], enumerable: false, writable: true }
        });
    }

    async loadNavigationProperties(){
        if(this.id){
            [this.emails, this.phones] = await Promise.all([
                db.emails.where('contactId').equals(this.id).toArray(),
                db.phones.where('contactId').equals(this.id).toArray(),
            ])
        }
    }

    save(){
        return db.transaction('rw', db.contacts, db.emails, db.phones, async ()=>{
            this.id = await db.contacts.put(this)
            if(this.emails && this.phones){
                let [emailIds, phoneIds] = await Promise.all([
                    Promise.all(this.emails.map(email => db.emails.put(email))),
                    Promise.all(this.phones.map(phone => db.phones.put(phone)))
                ])
                await Promise.all([
                    db.emails.where('contactId').equals(this.id)
                        .filter(email=>typeof(email.id) !== 'undefined')
                        .and(email=>emailIds.indexOf(email.id!) === -1)
                        .delete(),
                    db.phones.where('contactId').equals(this.id)
                        .filter(phone=>typeof(phone.id) !== 'undefined')
                        .and(phone => phoneIds.indexOf(phone.id!) === -1)
                        .delete()
                ])
            }
        })
    }
}