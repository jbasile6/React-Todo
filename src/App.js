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

let lastId = todoListData[todoListData.length - 1].id;
//used to keep track of new item Ids
const addNewId = () => {
  lastId++;
  return lastId;
};

//console.log(lastId);



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoListData,
    };
  };
  
  addItem = (e, item) => {
    e.preventDefault;
    const newItem = {
      task: item,
      id: addNewId(),
      completed: false
    };
    this.setState({
      todoListData: [...this.state.todoListData, newItem]
    });
  };


  render() {
    console.log(this.state);
    return (
      <div className="todo-app">
        <div className="header">
        <h1>To Do List</h1>
        <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;