import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
function InputForm() {
  const [todos, setTodos] = useContext(TodoContext);
  const initialState = {
    id: Date.now(),
    content: '',
    completed: false,
  };
  const [todo, setTodo] = useState(initialState);

  const handleOnChange = (key) => (event) => {
    setTodo((prev) => ({ ...todo, [key]: event.target.value }));
  };

  function addTodo(e) {
    e.preventDefault();

    setTodos([...todos, todo]);
    setTodo(initialState);
  }
  return (
    <div>
      <form autoComplete='off' onSubmit={addTodo}>
        <input
          type='text'
          onChange={handleOnChange('content')}
          value={todo.content}
          className='input w-80'
          placeholder='add a task'
          required
        />
        <button className='btn btn-primary' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}

export default InputForm;
