import './TodoCounter.css';//export por defecto

function TodoCounter (props) {
    return (
    <div className="progress-container">
        <h1>Has completado <span>{props.completed}</span> de <span>{props.total}</span></h1>
    </div>
    );
}

export { TodoCounter };//export nombrados