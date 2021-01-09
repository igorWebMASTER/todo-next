// import React, { useState } from 'react';
import { Container } from './style';
// import { v4 as uuidv4 } from 'uuid';
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
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const TodoForm = () => (
  <>
    <Container>
      <div className='form-newsletter'>
        <h1>TodoLuby </h1>
        <Formik
          initialValues={{
            firstName: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name='firstName' />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}

              <button type='submit'>Adicionar</button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  </>
);

export default TodoForm;
