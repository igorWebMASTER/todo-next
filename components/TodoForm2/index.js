import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';
import { v4 as uuidv4 } from 'uuid';

const TodoForm2 = ({ addTodo }) => {
  const addTodoSchema = Yup.object().shape({
    task: Yup.string()
      .required('Tarefa é obrigatória')
      .min(4, 'Tarefa com nome curto. deve conter mínimo de 5 letras'),
  });

  const [todo, setTodo] = useState({ id: '', task: '' });

  const initialValues = {
    task: '',
  };

  return (
    <Container>
      <h1>TodoLuby </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={addTodoSchema}
        onSubmit={(values) => {
          addTodo({ ...todo, id: uuidv4() });
          setTodo({ ...todo, task: values.task });
        }}
      >
        {(formik) => {
          const { values } = formik;

          return (
            <div className='container'>
              <Form onSubmit={formik.handleSubmit}>
                <div className='formTodo'>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <div className='inputTask'>
                      <Field
                        type='text'
                        name='task'
                        id='task'
                        onChange={formik.handleChange}
                        placeholder='Digite uma tarefa'
                      />
                      <ErrorMessage
                        name='task'
                        component='span'
                        className='error'
                      />
                    </div>
                    <div>
                      <button type='submit'>Adicionar</button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </Container>
  );
};

export default TodoForm2;
