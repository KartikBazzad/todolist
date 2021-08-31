import React, { useContext, useEffect } from 'react';
import InputForm from './Components/InputForm';
import Todos from './Components/Todos';
import { TodoContext } from './context/TodoContext';

function App() {
  const [todos] = useContext(TodoContext);
  useEffect(() => {
    save();
  }, [todos]);
  const save = () => {
    if (localStorage.getItem('todos' === null)) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  return (
    <div className='App flex items-center justify-center flex-col'>
      <div>
        <div className='text-center font-mono text-secondary flex p-8'>
          <h1 className='text-5xl font-semibold'>React Todo App</h1>
        </div>
        <div className='flex py-4 justify-center items-center'>
          <InputForm />
        </div>
      </div>
      <div>
        <ul className='todos'>
          {todos.map((todo) => {
            return (
              <li key={todos.indexOf(todo)}>
                <Todos todo={todo} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
