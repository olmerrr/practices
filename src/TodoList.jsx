import React from "react";
import './TodoList.css';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onDeleted}) => {
    const elements = todos.map( (item) => {
        const {id, ...itemProps} = item;
        return(
            <li key = {id} className="list-group-item">
                <TodoListItem
                  {...itemProps}
                  onDeleted = { () => onDeleted(id)}

                />
            </li>

        )
    })
    return <div className="todo-list-wrapp">
        <ul className="list-group todo-list">
            {elements}
        </ul>
    </div>
}
export default TodoList;