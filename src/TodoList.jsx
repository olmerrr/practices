import React from "react";
import './TodoList.css';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos}) => {
    const elements = todos.map( (item) => {
        const {id, ...itemProps} = item;
        return(
            <li key = {id}>
                <TodoListItem
                  {...itemProps}
                />
            </li>

        )
    })
    return <div className="todo-list-wrapp">
        <ul>
            {elements}
        </ul>
    </div>
}
export default TodoList;