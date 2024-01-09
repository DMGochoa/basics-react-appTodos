import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { TodosError } from '../components/TodosError/TodosError';
import { TodosLoading } from '../components/TodosLoading/TodosLoading';
import { TodoContext } from '../components/TodoContext/TodoContext';
import React from 'react';


function AppUI() {
    return (
        <React.Fragment>
            <header className='header'>
                <TodoCounter />
                <NavigationBar />
                <TodoSearch />
            </header>
            <div className='content'>
                <TodoContext.Consumer>
                    {({error, loading, searchedTodos, completeTodo, deleteTodo}) => (
                    <TodoList>
                        {loading && (
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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
                    )}
                </TodoContext.Consumer>
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