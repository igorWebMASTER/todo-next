import React from 'react';
import { Container } from './styles';

function Todo({ todo }) {
  return (
    <Container>
      <li>{todo.task}</li>
    </Container>
  );
}

export default Todo;
