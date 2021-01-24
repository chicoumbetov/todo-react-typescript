import React, {ChangeEvent, FormEvent } from "react";
import './AddTodoForm.css';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm = ({addTodo}: AddTodoFormProps) => {

    const [newTodo, setNewTodo] = React.useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    /*Let's to add new task */
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
    }
    return (
        <form>
            <input type="text" 
                   value={newTodo} 
                   onChange={handleChange}
                   
            />
            <button className="but" type="submit" onClick={handleSubmit}>Add Todo</button>
        </form>
    )
}