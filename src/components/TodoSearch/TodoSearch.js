import './TodoSearch.css';
import React from 'react';

function TodoSearch (props) {
    return (
    <div className="search-container">
        <input 
        type="text"
        placeholder="Buscar"
        value={props.searchValue}
        onChange={(event) => {
            props.setSearchValue(event.target.value);
        }} />
    </div>
    );
}

export { TodoSearch };//export nombrados