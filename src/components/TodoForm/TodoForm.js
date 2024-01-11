import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoForm () {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Escribe tu nuevo TODO"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="button-container">
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--submit"
                >
                    Añadir
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };