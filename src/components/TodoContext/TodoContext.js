import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('TODOS', []); // Ya podemos llamar
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

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
        saveTodos(newTodos)
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            todo => todo.text === text
            );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text
        });
        saveTodos(newTodos);
    };
    return (
    <TodoContext.Provider value={{
        addTodo,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }}>
        {props.children}
    </TodoContext.Provider >
    )
}

export { TodoContext, TodoProvider };
