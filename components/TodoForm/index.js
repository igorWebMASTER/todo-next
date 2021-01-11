import { useState } from 'react';
import { Container } from './style';
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  task: Yup.string()
    .min(5, 'Mínimo de 5 letras!')
    .required('Esse campo é obrigatório'),
});

const initialValues = {
  task: '',
};

export const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: '' });
    }
  }
  return (
    <>
      <Container>
        <h1>TodoLuby </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <Form>
                <div className='form-newsletter'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingBottom: '10px',
                    }}
                  >
                    <Field
                      name='task'
                      type='text'
                      value={todo.task}
                      onChange={handleTaskInputChange}
                    />
                    <ErrorMessage
                      name='task'
                      component='span'
                      className='error'
                    />
                  </div>
                  <div>
                    <button type='submit' disabled={!isValid}>
                      Adicionar
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
};

export default TodoForm;
