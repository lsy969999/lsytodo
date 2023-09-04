'use client'
import React from 'react'
import { TodoList } from '../models/TodoList'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import AddTodoItem from './AddTodoItem'
import TodoItemView from './TodoItemView'

interface Props {
    todoList: TodoList
}

const TodoListView = ({todoList}: Props) => {
    const items = useLiveQuery(
        ()=>db.todoItems.where({todoListId: todoList.id}).toArray(),
        [todoList.id]
    )
    if (!items) return null
  return (
    <div>
        <div>
            <h2>{todoList.title}</h2>
            <div>
                <a onClick={()=>db.deleteList(todoList.id!)} title='Delete list'>
                    
                </a>
            </div>
        </div>
        <div>
            {items.map(item=>(
                <TodoItemView key={item.id} item={item} />
            ))}
        </div>
        <div>
            <AddTodoItem todoList={todoList}></AddTodoItem>
        </div>
    </div>
  )
}

export default TodoListView