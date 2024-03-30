import React, { useState } from 'react';
import axios from 'axios';
import { MaterialUIForm } from './components/MaterialUIForm';
import './App.css';
const endpoint = "http://localhost:4000/todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [showAddPost, setShowAddPost] = React.useState(false);

  React.useEffect(() => {
    axios.get(endpoint).then((response) => {
      setTodos(response.data);
    });

    setInterval(() => {
      axios.get(endpoint).then((response) => {
        setTodos(response.data)
      });
    }, 100);
  }, []);

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/todos/${id}`);
      alert("Todo Deleted!")
      setTodos(null);
  }

  const handleShowAddPost = () => {
    setShowAddPost(!showAddPost);
  }

  return (
    <div>
      <button onClick={handleShowAddPost}>Add Post</button>
      {showAddPost && <MaterialUIForm formName="Add New Post" formDescription="Crete new post here!"></MaterialUIForm>}
      {todos.length > 0 ? (todos.map(todo => {
        return <div>
        {todo.title}
        {todo.description}
        <button onClick={() => deleteTodo(todo.id)}>Delete Post</button>
        <br />
      </div>
      })) : ( 
        <p>No Todos avilable!</p>
      )}
    </div>
  )
}

export default App
