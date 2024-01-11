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
import { Modal } from '../components/Modal/Modal';
import { TodoForm } from '../components/TodoForm/TodoForm';
import React from 'react';


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <header className='header'>
                <TodoCounter />
                <NavigationBar />
                <TodoSearch />
            </header>
            <div className='content'>
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
                <aside className="chart-container">
                    <div id="todo-chart">
                    {/* <!-- Aquí integrarías la gráfica con la librería de gráficos de tu elección --> */}
                    </div>
                </aside>
            </div>
            <footer className='footer'>
                <CreateTodoButton />
            </footer>
            <Modal isOpen={openModal} setOpen={setOpenModal}>
                <TodoForm />
            </Modal>

            
        </React.Fragment>
    );
}

export { AppUI };