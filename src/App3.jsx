import React, { useState } from 'react';

function useTodos(){
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

    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
      }).then((response) => {
        response.json().then((data) => {
          setTodos(data)
          console.log(data);
        });
      });
    }, 1000);

  }, []);
  return todos
}

function App() {
  const todos = useTodos();

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
    <button onClick={() => {
      fetch()
    }}>Delete</button>
    <br />
  </div>
}

export default App
