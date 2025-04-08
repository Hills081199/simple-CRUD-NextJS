import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (taskText) => {
    const newTodo = {
      task: taskText,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  }

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default Home;