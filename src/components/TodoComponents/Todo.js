import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    return (
        <div
        className={`item${props.item.purchased ? ' purchased' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
        <p>{props.item.task}</p>
        </div>

    )
}



export default Todo;