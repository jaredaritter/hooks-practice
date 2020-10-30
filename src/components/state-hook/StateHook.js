import React, { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  const todoList = todos.map((todo, i) => {
    return <li key={i}>{todo.text}</li>;
  });

  const addTodo = () => {
    const todo = prompt('Next todo?');
    setTodos([...todos, { text: todo }]);
  };

  return (
    <div>
      <h2>StateHook Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <p>Fruit: {fruit}</p>
      <button
        onClick={() => setFruit(fruit === 'banana' ? 'orange' : 'banana')}
      >
        Fruit
      </button>
      <ul>{todoList}</ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default StateHook;
