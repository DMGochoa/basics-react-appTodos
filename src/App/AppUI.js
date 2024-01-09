import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import React from 'react';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}) {
    return (
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
    );
}

export { AppUI };