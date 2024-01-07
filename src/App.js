import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
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
      <header className='header'>
        <TodoCounter completed={15} total={25}/>
        <NavigationBar />
        <TodoSearch />
      </header>
      <div className='content'>
        <TodoList>
          {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
          ))}
        </TodoList>
        <aside class="chart-container">
            <div id="todo-chart">
            {/* <!-- Aquí integrarías la gráfica con la librería de gráficos de tu elección --> */}
            </div>
        </aside>
      </div>
      <footer className='footer'>
        <CreateTodoButton />
      </footer>
    </React.Fragment>
    // </div>
  );
}

export default App;
