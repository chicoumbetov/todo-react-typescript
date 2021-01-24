import  * as React from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';
import './App.css';

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

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&    /* disable ability to add empty tasks */
      setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
    <React.Fragment>
      <div className="whole">
        <h1>To Do List App</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <AddTodoForm addTodo={addTodo}/>
      </div>
      
    </React.Fragment>
    
  );
}

export default App;