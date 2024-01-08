import './CreateTodoButton.css';

function CreateTodoButton () {
    return (
        <button className="CreateTodoButton" 
        onClick={
            () => alert('Aqui deberia abrir el modal')
        }
        >New</button>
    );
}

export { CreateTodoButton };//export nombrados