"use client"

import React from 'react'
import TodoList from './components/TodoList'
import Link from 'next/link'
import AddTodoList from './components/AddTodoList'
import ResetDatabaseButton from './components/ResetDatabaseButton'

const Todo = () => {
  return (
    <div>
        <section>
            <Link href="/">back</Link>
        </section>
        <TodoList/>
        <AddTodoList/>
        <ResetDatabaseButton/>
    </div>
  )
}

export default Todo