import React from "react";

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    return(
        <div style = {style}>{label}</div>
    )
}
export  default TodoListItem;