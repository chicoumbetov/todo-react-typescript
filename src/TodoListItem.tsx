//import React, {FC} from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem = ({todo, toggleTodo}: TodoListItemProps) => {
    
    return <div className="d-flex align-items-center">
                <label className={todo.complete ? "complete" : undefined}>
                    <input type="checkbox" 
                           checked={todo.complete}
                           onChange={() => toggleTodo(todo)}
                           className="option-input radio"
                            />
                    {todo.text}
                </label>
            </div>
}