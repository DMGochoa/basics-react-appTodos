import React from "react";
import {TodoIcon} from "./TodoIcon";

function DeleteIcon(props) {
    return (
        <TodoIcon 
            type="delete"
            color="grey"
            onClick={props.onDelete}
        />
    )
}

export { DeleteIcon }