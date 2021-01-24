import  * as React from 'react';
import { TodoListItem } from './TodoListItem';
//import { Todo } from './types';    // don't need since types are in d.ts

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: false },
  { text: "Write app", complete: false }
];

const App = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </React.Fragment>
    
  );
}

export default App;