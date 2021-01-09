import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*{
 margin: 0;
 padding: 0;
 outline: 0;
 box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialised;
  background:#f2f2f2;
}

body, input , button{
  font-family: 'Nunito', sans-serif;
}

#root{
  margin: 0 auto;
  /* padding: 0 20px 50px; */
}

button{
  cursor: pointer;
}




`;

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

import { List, Container } from './styles';

function index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <>
      {/* <form>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Digite uma tarefa'
        />
        <button onClick={handleSubmit}>Adicionar</button>
      </form> */}

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} />

      <GlobalStyle />
    </>
  );
}
export default index;
