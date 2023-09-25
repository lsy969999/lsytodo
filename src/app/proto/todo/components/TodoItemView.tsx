import React from 'react'
import { TodoItem } from '../models/TodoItem'
import { db } from '../models/db';

interface Props {
    item: TodoItem;
}

const TodoItemView = ({item}: Props) => {
  return (
    <div>
        <div>
            <input type="checkbox"
            checked={!!item.done}
            onChange={ev=>{
                db.todoItems.update(item, {
                    done: ev.target.checked
                })
            }} />
        </div>
        <div>{item.title}</div>
        <div>
            <a onClick={()=> {
                if(item.id != undefined){
                    db.todoItems.delete(item.id)
                }
            }} title='Delete item'>
                DEL
            </a>
        </div>
    </div>
  )
}

export default TodoItemView