import './CreateTodoButton.css';
import { AiOutlineFileAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

function CreateTodoButton () {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <IconContext.Provider value={{ className: "react-icons" }}>
            <button className="CreateTodoButton" 
        onClick={
            () => setOpenModal(!openModal)
        }
        ><AiOutlineFileAdd /></button>
        </IconContext.Provider>
        
    );
}

export { CreateTodoButton };//export nombrados