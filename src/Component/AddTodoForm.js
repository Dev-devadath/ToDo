import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input.attrs({ type: 'text' })`
  width: 250px; 
  height: 40px; 
  padding: 8px; 
  font-size: 16px; 
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
  ::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  background-color: #660066; 
  color: white; 
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 20px; 
  cursor: pointer;
`;

const AddTodoForm = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      onAddTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <FormContainer>
      <Input
        placeholder="Type new task..." 
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <Button onClick={handleAddTodo}>Add New</Button> 
    </FormContainer>
  );
};

export default AddTodoForm;
