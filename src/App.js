import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const clearTodos = () => {
    setTodos([]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
        <h1>- TODO List -</h1>
        <input type='text' placeholder='Description' name="description" value={todo.description} onChange={inputChanged} />
        <br />
        <br />
        <input type='text' placeholder='Date' name="date" value={todo.date} onChange={inputChanged} />
        <br />
        <br />
        <button className='addButton' onClick={addTodo}>Add</button>
        <button className='clearButton' onClick={clearTodos}>Clear</button>
        <table cellpadding="10" className='todotable'>
          <tbody>
            {
              todos.map((todo, index) => <tr key={index}><td >{todo.description}</td><td>{todo.date}</td><button className='deleteButton' onClick={() => deleteTodo(index)}>X</button><td></td></tr>)
            }
          </tbody>
        </table>
    </div>
  );
}

export default App;
