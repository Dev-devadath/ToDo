import React from 'react';
import styled from 'styled-components';
import revertIcon from '../assets/revert.svg'; 
import deleteIcon from '../assets/delete.svg'; 
import tickGreenIcon from '../assets/tick-green.svg'; 

const CompletedListContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: transparent;
`;

const CompletedTodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  background-color: #f0f0f0;
`;

const TaskNumber = styled.div`
  margin-right: 10px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => (props.completed ? '#66bb6a' : '#000')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f0f0f0;
`;

const Checkmark = styled.img`
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
  border: 2px solid ${(props) => (props.completed ? '#66bb6a' : '#ccc')}; 
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

const CompletedTodoList = ({ completedTodos, onToggleComplete, onDelete, onToggleIncomplete }) => {
  return (
    <CompletedListContainer>
      <h2>Completed</h2>
      {completedTodos.map((todo) => (
        <CompletedTodoItem key={todo.id} completed={true}>
          <TaskNumber>{todo.number},</TaskNumber> 
          <Circle completed={true}>
            <Checkmark src={tickGreenIcon} alt="Completed" checked={true} />
          </Circle>
          <Text value={todo.text} readOnly={true} completed={true} />
          <Icon src={deleteIcon} alt="Delete" onClick={() => onDelete(todo.id)} />
          <Icon src={revertIcon} alt="Revert to To-Do" onClick={() => onToggleIncomplete(todo)} />
        </CompletedTodoItem>
      ))}
    </CompletedListContainer>
  );
};

export default CompletedTodoList;
