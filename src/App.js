import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoItems = [
  {
    task: 'Learn User Interface and Git',
    id: 1,
    completed: false
  },
  {
    task: 'Learn Advanced CSS',
    id: 2,
    completed: false
  }
  {
    task: 'Learn JavaScript Fundamentals',
    id: 3,
    completed: false
  }
  {
    task: 'Learn Applied JavaScript',
    id: 4,
    completed: false
  }
  {
    task: 'Complete Project Week: User Interface',
    id: 5,
    completed: false
  }
  {
    task: 'Learn React',
    id: 6,
    completed: false
  }
  {
    task: 'Learn Intermediate React',
    id: 7,
    completed: false
  }
]

let lastId = 7;
const addNewId = () => {
  lastId++;
  return lastId;
};



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: todoItems,
      inputText: ''
    };
  }

  addtodoItem = todoItem => {
    
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
