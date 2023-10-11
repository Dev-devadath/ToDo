import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './Component/TodoList';
import AddTodoForm from './Component/AddTodoForm';
import CompletedTodoList from './Component/CompletedTodoList';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  margin-top: 0;
`;

const ThingsToDoContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f0f0f0;
`;

const CompletedListContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f0f0f0;
  text-align: center;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [taskNumber, setTaskNumber] = useState(1); 

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      number: taskNumber, 
    };
    setTaskNumber(taskNumber + 1); 
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    const completedTodo = updatedTodos.find((todo) => todo.id === id);

    if (completedTodo) {
      setCompletedTodos([...completedTodos, completedTodo]);
    }

    setTodos(updatedTodos.filter((todo) => todo.id !== id));
  };

  const toggleIncomplete = (completedTodo) => {
    const updatedCompletedTodos = completedTodos.filter(
      (todo) => todo.id !== completedTodo.id
    );
    setCompletedTodos(updatedCompletedTodos);
    setTodos([...todos, completedTodo]);
  };

  const deleteTodo = (id, isCompleted) => {
    if (isCompleted) {
      const updatedCompletedTodos = completedTodos.filter(
        (todo) => todo.id !== id
      );
      setCompletedTodos(updatedCompletedTodos);
    } else {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      
      updatedTodos.forEach((todo, index) => {
        todo.number = index + 1;
      });
      setTodos(updatedTodos);
    }
  };
  

  
  todos.sort((a, b) => a.number - b.number);
  completedTodos.sort((a, b) => a.number - b.number);

  return (
    <AppContainer>
      <Header>Todo List</Header>
      <AddTodoForm onAddTodo={addTodo} />
      <ThingsToDoContainer>
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={(id) => deleteTodo(id, false)}
          onToggleIncomplete={toggleIncomplete}
        />
      </ThingsToDoContainer>
      <CompletedListContainer>
        <CompletedTodoList
          completedTodos={completedTodos}
          onToggleComplete={toggleComplete}
          onDelete={(id) => deleteTodo(id, true)}
          onToggleIncomplete={toggleIncomplete}
        />
      </CompletedListContainer>
    </AppContainer>
  );
}

export default App;
