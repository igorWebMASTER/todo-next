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
  background:#403f4d;
}

body, input , button{
  font-family: 'Nunito', sans-serif;
}

#root{
  margin: 0 auto;
}

button{
  cursor: pointer;
}




`;

import TodoForm from '../components/TodoForm2';
import TodoList from '../components/TodoList';

function index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('TodoLuby:todos'));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('TodoLuby:todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />

      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#fff' }}>Não tem tarefas adicionadas</h3>
        </div>
      )}

      <GlobalStyle />
    </>
  );
}
export default index;
