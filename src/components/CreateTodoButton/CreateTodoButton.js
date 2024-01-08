import './CreateTodoButton.css';
import { AiOutlineFileAdd } from "react-icons/ai";
import { IconContext } from "react-icons";

function CreateTodoButton () {
    return (
        <IconContext.Provider value={{ className: "react-icons" }}>
            <button className="CreateTodoButton" 
        onClick={
            () => alert('Aqui deberia abrir el modal')
        }
        ><AiOutlineFileAdd /></button>
        </IconContext.Provider>
        
    );
}

export { CreateTodoButton };//export nombrados