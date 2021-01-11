import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, useFormik, ErrorMessage, setIn } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import { v4 as uuidv4 } from 'uuid';

const TodoForm2 = ({ addTodo }) => {
  const [inputError, setInputError] = useState('');

  const [todo, setTodo] = useState({
    id: '',
    task: '',
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
    setInputError('');
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim() && todo.task.length > 5) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: '' });
    } else {
      setInputError('Digite uma tarefa');
    }

    setInputError('');
  }

  return (
    <Container>
      <h1>TodoLuby </h1>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='formTodo'>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div className='inputTask'>
                <input
                  type='text'
                  name='task'
                  onChange={handleTaskInputChange}
                  placeholder='Digite uma tarefa'
                />
                {!!inputError ? <div className='error'>{inputError}</div> : ''}
              </div>
              <div>
                <button type='submit'>Adicionar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default TodoForm2;
