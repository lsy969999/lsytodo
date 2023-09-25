

import { useLiveQuery } from 'dexie-react-hooks';
import React, { useState } from 'react'
import { db } from '../models/db';

const AddTodoList = () => {
    const [isAcive, setIsActive] = useState(false);
    const [title, setTitle] = useState('');
    const hasAnyList = useLiveQuery(async ()=>{
        const listCount = await db.todoLists.count()
        return listCount > 0;
    })
  return !isAcive ? (
    <button onClick={()=>setIsActive(!isAcive)}>
        {hasAnyList ? `Add another list` : `Create ToDo List`}
    </button>
  ) : (
    <div>
        <h2>Give your list a name:</h2>
        <div>
            <input type="text"
                autoFocus 
                placeholder='Name of list...'
                value={title} 
                onChange={ev=>setTitle(ev.target.value)} 
                onKeyUp={ev=>{
                    if(ev.key === 'Enter'){
                        db.todoLists.add({title});
                        setTitle('');
                        setIsActive(false)
                    }
                }} />
        </div>
    </div>
  )
}

export default AddTodoList