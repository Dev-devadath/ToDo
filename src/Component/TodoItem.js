import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const Text = styled.input.attrs({ type: 'text' })`
  margin-left: 10px;
`;

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <TodoItemContainer>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <Text value={todo.text} readOnly={true} />
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </TodoItemContainer>
  );
};

export default TodoItem;
