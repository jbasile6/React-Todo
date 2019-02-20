import React from 'react';
import Todo from './Todo';



// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js



const TodoList = props => {
    const sortedTodoData = props.todoListData.sort((a,b) => a.completed - b.completed);
    return (
        <div className="toDoItem">
           {sortedTodoData.map(item => (
               <Todo 
                key={item.id}
                item={item}
                toggleItem={props.toggleItem}
                />
           ))}
        </div>
    );
};


export default TodoList;