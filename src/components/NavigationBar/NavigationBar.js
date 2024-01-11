import './NavigationBar.css';
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function NavigationBar() {
    const {setSearchValue, searchCompletedTodos, searchByTextTodos} = React.useContext(TodoContext);

    const onAll = () => {
        setSearchValue('');
        searchByTextTodos('');

    }

    const onActive = () => {
        setSearchValue('');
        searchCompletedTodos(false);
    }

    const onDone = () => {
        setSearchValue('');
        searchCompletedTodos(true);
    }

    return (
        <nav className="navigation">
            <button
                type='buttom'
                className="navigation-all navigation-all--selected"
                onClick={onAll}
            >
                All
            </button>
            <button
                type='buttom'
                className="navigation-active navigation-active--selected"
                onClick={onActive}
            >
                Active
            </button>
            <button
                type='buttom'
                className="navigation-done navigation-active--selected"
                onClick={onDone}
            >
                Done
            </button>
        </nav>
    );
}

export { NavigationBar };