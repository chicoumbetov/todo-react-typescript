import * as React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                <TodoListItem 
                    key={todo.text} 
                    todo={todo} 
                    toggleTodo={toggleTodo} 
                />)
            })}
        </ul>
    )
}
