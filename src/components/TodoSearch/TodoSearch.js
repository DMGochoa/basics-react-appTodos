import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch () {
    const {searchValue, setSearchValue, searchByTextTodos} = React.useContext(TodoContext);
    return (
    <div className="search-container">
        <input 
        type="text"
        placeholder="Buscar"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
            searchByTextTodos(event.target.value);
        }} />
    </div>
    );
}

export { TodoSearch };//export nombrados