import React, { useState } from 'react'
import { TodoList } from '../models/TodoList'
import { db } from '../models/db'
import { TodoItem } from '../models/TodoItem'

interface Props{
    todoList: TodoList
}

const AddTodoItem = ({todoList}: Props) => {
    const [item, setItem] = useState<TodoItem>({
        title: '',
        todoListId: todoList.id!
    })
  return (
    <div>
        <div>
            <input type="checkbox" disabled />
        </div>
        <div>
            <input
                type="text"
                placeholder='Add todo item...'
                value={item.title}
                onChange={ev=>setItem(item=>({
                    ...item,
                    title: ev.target.value
                }))}
                onKeyUp={ev=>{
                    if(ev.key === 'Enter'){
                        db.todoItems.add(item)
                        setItem({
                            todoListId: todoList.id!,
                            title: ''
                        })
                    }
                }}
                />
        </div>
    </div>
  )
}

export default AddTodoItem