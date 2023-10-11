import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/delete.svg';

const TodoListContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  background-color: transparent; 
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background-color: #f0f0f0;
  margin-right: 10px; 
`;

const Checkmark = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.checked ? 'block' : 'none')};
  pointer-events: none;
`;

const Text = styled.input.attrs({ type: 'text' })`
  margin-left: 10px;
  border: 2px solid ${(props) => (props.completed ? 'block' : 'none')}; 
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const TaskNumber = styled.div`
  margin-right: 10px;
`;

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <TodoListContainer>
      <h2>Things to be done</h2>
      {todos.map((todo) => (
        <TodoItemContainer key={todo.id}>
          <TaskNumber>{todo.number},</TaskNumber>
          <Circle onClick={() => onToggleComplete(todo.id)}>
            <Checkmark checked={todo.completed} />
          </Circle>
          <Text value={todo.text} readOnly={true} completed={todo.completed} />
          <Icon
            src={deleteIcon}
            alt="Delete"
            onClick={() => onDelete(todo.id)}
          />
        </TodoItemContainer>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
