import React from 'react'
import { TodoItem } from '../models/TodoItem'
import { db } from '../models/db'

interface Prop {
    item: TodoItem
}

const TodoItemView = ({item}: Prop) => {
  return (
    <div>
        <div>
            <input
                type="checkbox"
                checked={!!item.done}
                onChange={ev=>
                    db.todoItems.update(item, {
                        done: ev.target.checked
                    })
                }
                />
        </div>
        <div>{item.title}</div>
        <div>
            <a title='Delete item' onClick={()=>db.todoItems.delete(item.id!)}></a>
        </div>
    </div>
  )
}

export default TodoItemView