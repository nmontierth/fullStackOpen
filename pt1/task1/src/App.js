import React from 'react'

const Header = (props) => {
  return(
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Part = (props) => {
  let part = props.parts[props.number]
  let exercise = props.exercises[props.number]
  return(
    <>
      <p>{part} {exercise}</p>
    </>
  )
  }
const Content = (props) => {
  let parts = props.parts
  let exercises = props.exercises
  return(
  <div>
    <Part parts={parts} exercises={exercises} number = {0}/>
    <Part parts={parts} exercises={exercises} number = {1}/>
    <Part parts={parts} exercises={exercises} number = {2}/>
  </div>
  )
}

const Total = (props) => {
  return(
  <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
  )
}





const App = () => {
  const course = 'Half Stack application development';
  let parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  let exercises = [10,7,14]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises1={exercises[0]} exercises2={exercises[1]} exercises3={exercises[2]}/>
    </div>
  );
}

export default App;
