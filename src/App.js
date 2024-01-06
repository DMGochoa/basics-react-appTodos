import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Hacer un proyecto personal', completed: false },
]

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <TodoCounter completed={15} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
    // </div>
  );
}

export default App;
