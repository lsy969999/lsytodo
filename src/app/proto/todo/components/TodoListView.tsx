
import React from 'react'
import { TodoList } from '../models/TodoList'
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../models/db';
import { InstancedMesh } from 'react-babylonjs';
import TodoItemView from './TodoItemView';
import AddTodoItem from './AddTodoItem';

interface Props {
    todoList: TodoList;
}

const TodoListView = ({todoList}: Props) => {
    const items = useLiveQuery(
        ()=> db.todoItems.where({todoListId: todoList.id}).toArray(),
        [todoList.id]
    )

    if(!InstancedMesh) return null;
  return (
    <div>
        <div>
            <h2>{todoList.title}</h2>
            <div>
                <a title='Delete lists' onClick={()=>{
                    if(todoList.id){
                        db.deleteList(todoList.id)
                    }
                }}>DEL List</a>
            </div>
        </div>
        <div>
            {items?.map(item=>(
                <TodoItemView key={item.id} item={item}></TodoItemView>
            ))}
        </div>
        <div>
            <AddTodoItem todoList={todoList} />
        </div>
    </div>
  )
}

export default TodoListView