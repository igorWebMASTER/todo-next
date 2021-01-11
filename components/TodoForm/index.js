import { useState } from 'react';
import { Container } from './style';
import { v4 as uuidv4 } from 'uuid';
// import { withFormik, Form, Field, ErrorMessage } from 'formik';

// import * as Yup from 'yup';

// const schema = Yup.object().shape({
//   task: Yup.string()
//     .required('Informe a tarefa!')
//     .min(5, 'A tarefa deve conter mais de 5 letras'),
// });

// const enhanceWithFormik = withFormik({
//   // mapPropsToValues: () => ({ task: '' }),

//   isInitialValid: false,
//   validateOnChange: true,
//   validateOnBlur: true,
//   displayName: 'TodoForm',
//   validationSchema: schema,
// });

// const TodoForm = ({ addTodo }) => {
//   const [todo, setTodo] = useState({
//     id: '',
//     task: '',
//   });

//   function handleTaskInputChange(e) {
//     setTodo({ ...todo, task: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (todo.task.trim()) {
//       addTodo({ ...todo, id: uuidv4() });
//       setTodo({ ...todo, task: '' });
//     }
//   }

//   return (
//     <>
//       <Container>
//         <h1>TodoLuby App</h1>
//         {/* <div className='form-newsletter'> */}
//         <Form onSubmit={handleSubmit}>
//           <Field
//             type='text'
//             name='task'
//             value={todo.task}
//             onChange={handleTaskInputChange}
//             placeholder='Digite uma tarefa'
//           />
//           <ErrorMessage name='task' component='div' />

//           <button type='submit'>Adicionar </button>
//         </Form>

//         {/* <form schema={schema} onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type='text'
//                 value={todo.task}
//                 onChange={handleTaskInputChange}
//                 placeholder='Digite uma tarefa'
//               />
//             </div>
//             <div>
//               <button type='submit'>Adicionar </button>
//             </div>
//           </form> */}
//         {/* </div> */}
//       </Container>
//     </>
//   );
// };

// export default enhanceWithFormik(TodoForm);

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
