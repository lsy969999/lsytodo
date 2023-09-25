import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import { db } from '../models/db'
import TodoListView from './TodoListView';

const TodoList = () => {
    const lists = useLiveQuery(()=>db.todoLists.toArray());
    if(!lists) return null
  return (
    <div>
        {lists.map(list=>(
            <TodoListView key={list.id} todoList={list}></TodoListView>
        ))}
    </div>
  )
}

export default TodoList