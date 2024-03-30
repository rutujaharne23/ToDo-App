import React, { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = React.useState(
    [{
      title: "Go to gym",
      description: "Go to gym at 8AM",
      id: 1
    }, {
      title: "Go eat Food",
      description: "Eat Food at 11AM",
      id: 2
    }]
  );

  // setInterval(() => {
  //   setTodos({ 
  //     title: "Go eat Food" + Math.random(),
  //     description: "Eat Food at 11AM",
  //     id: 1 
  //   })
  // }, 1000);

  return (
    <div>
      {todos.map((todo)=> {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
      {/* {JSON.stringify(todos)} */}
      {/* <h1>Hi there</h1>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      <span>{todo.description}</span>
      <PersonName firstName={todo.title} lastName={"Harne"}></PersonName> */}
    </div>
  )
}

// function PersonName(props) {
//   return <div>
//     {props.firstName} {props.lastName}
//   </div>  
// }

function Todo(props){
  return <div>
  {props.title}
  {props.description}
  <br />
</div>
}

export default App
