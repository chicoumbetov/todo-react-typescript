import React from 'react';
import { TodoListItem } from './TodoListItem';
//import { Todo } from './types';    // don't need since types are in d.ts

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: false },
  { text: "Write app", complete: false }
];

const App: React.FC = () => {
  return (
    <TodoListItem todo={todos[0]}/>
  );
}

export default App;