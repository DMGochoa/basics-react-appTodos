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
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
      );
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
    } else {
      newTodos[todoIndex].completed = true;
    }
    setTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  };


  return (
    // <div className="App">
    <React.Fragment>
      <header className='header'>
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <NavigationBar />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </header>
      <div className='content'>
        <TodoList>
          {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))}
        </TodoList>
        <aside className="chart-container">
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
