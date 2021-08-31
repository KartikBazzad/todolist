import React, { useState, createContext } from 'react';

export const TodoContext = createContext();
function TodoProvider(props) {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
