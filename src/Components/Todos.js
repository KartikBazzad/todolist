import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Todos({ todo }) {
  const [todos, setTodos] = useContext(TodoContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  function deleteTodo() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function completed() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  }
  const updateTodo = (key) => (event) => {
    setUpdatedTodo((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const updateTodoForm = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: updatedTodo.content };
        }
        return item;
      }),
    );
    setIsOpen(false);
  };

  return (
    <div className={`todoItem ${todo.completed ? 'completed' : ''}`}>
      <div className='flex-1'>
        <p>{todo.content}</p>
      </div>
      <div className='flex justify-around w-24'>
        <div onClick={openModal} className='btn btn-sm btn-ghost btn-circle'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M4.41999 20.579C4.13948 20.5785 3.87206 20.4603 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.48103L18.52 9.01703L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31003L15.69 4.77403L17.811 2.65303C17.9986 2.46525 18.2531 2.35974 18.5185 2.35974C18.7839 2.35974 19.0384 2.46525 19.226 2.65303L21.347 4.77403C21.5348 4.9616 21.6403 5.21612 21.6403 5.48153C21.6403 5.74694 21.5348 6.00146 21.347 6.18903L19.227 8.30903L19.226 8.31003Z'
              fill='#f5f5f5'></path>
          </svg>
        </div>
        <div>
          <Modal
            className='content'
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            overlayClassName='overlay'
            contentLabel='Edit Todo'>
            <div>Old : {todo.content}</div>
            <form className='flex flex-col' onSubmit={updateTodoForm}>
              <label htmlFor='todoContent' className='label'>
                New value:
              </label>
              <input
                className='input w-96 input-sm'
                type='text'
                value={updateTodo.content}
                onChange={updateTodo('content')}
              />
              <div className='flex justify-end items-center'>
                <p className='btn btn-link' onClick={closeModal}>
                  cancel
                </p>
                <button
                  type='submit'
                  className='btn float-left btn-active btn-sm'>
                  Update
                </button>
              </div>
            </form>
          </Modal>
        </div>

        <div className='btn btn-sm btn-ghost btn-circle' onClick={completed}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.52645 14.8265L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z'
              fill='#f5f5f5'></path>
          </svg>
        </div>
        <div className='btn btn-sm btn-ghost btn-circle' onClick={deleteTodo}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z'
              fill='#f5f5f5'></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Todos;
