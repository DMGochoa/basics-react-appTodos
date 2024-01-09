import React from 'react';
import './TodoCounter.css';//export por defecto
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter () {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
    <div className="progress-container">
        <h1>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span></h1>
    </div>
    );
}

export { TodoCounter };//export nombrados