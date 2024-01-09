import { TodoProvider } from '../components/TodoContext/TodoContext';
import './App.css';
import { AppUI } from './AppUI';
import React from 'react';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export { App };


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Hacer un proyecto personal', completed: false },
// ]

// localStorage.setItem('TODOS', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS');