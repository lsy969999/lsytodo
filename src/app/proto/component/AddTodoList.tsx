import { useLiveQuery } from 'dexie-react-hooks';
import React, { useState } from 'react'
import { db } from '../models/db';

const AddTodoList = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const hasAnyList = useLiveQuery(async () => {
        const listCount = await db.todoLists.count();
        return listCount > 0
    })
  return !isActive ? (
    <button onClick={()=>setIsActive(!isActive)}>
        {hasAnyList ? `Add another list` : `Create Todo List`}
    </button>
  ) : (
    <div>
        <h2>Give your list a name:</h2>
        <div>
            <input
                type="text"
                autoFocus
                placeholder='Name of lists...'
                value={title}
                onChange={ev => setTitle(ev.target.value)}
                onKeyUp={ev=>{
                    if(ev.key === 'Enter'){
                        db.todoLists.add({title})
                        setTitle('')
                        setIsActive(false)
                    }
                }}
                />
        </div>
    </div>
  )
}

export default AddTodoList