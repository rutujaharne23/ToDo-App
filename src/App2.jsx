import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        setTodos(data)
        console.log(data);
      });
    });
  }, []);
  
  return (
    <div>
      {todos.map(todo => {
        return <RenderTodo title={todo.title} description={todo.description}></RenderTodo>
      })}
    </div>
  )
}

function RenderTodo(props){
  return <div>
    {props.title}
    {props.description}
    <button>Delete</button>
    <br />
  </div>
}

export default App
