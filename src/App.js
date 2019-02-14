import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoListData = [
  {
    task: 'Learn User Interface and Git',
    id: 1,
    completed: false
  },
  {
    task: 'Learn Advanced CSS',
    id: 2,
    completed: false
  },
  {
    task: 'Learn JavaScript Fundamentals',
    id: 3,
    completed: false
  },
  {
    task: 'Learn Applied JavaScript',
    id: 4,
    completed: false
  },
  {
    task: 'Complete Project Week: User Interface',
    id: 5,
    completed: false
  },
  {
    task: 'Learn React',
    id: 6,
    completed: false
  },
  {
    task: 'Learn Intermediate React',
    id: 7,
    completed: false
  }
]

let lastId = 7;
//used to keep track of new item Ids
const addNewId = () => {
  lastId++;
  return lastId;
};



class App extends React.Component {
  constructor() {
    super();
  
    };
  }


  render() {
    return (
      <div className="todo-app">
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
