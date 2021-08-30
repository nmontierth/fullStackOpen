import React from 'react'

const Header = (props) => {
  return(
  <>
    <h1>{props.course}</h1>
  </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
  )
}

const Content = (props) => {
  let part1 = props.parts[0];
  let part2 = props.parts[1];
  let part3 = props.parts[2];
  return(
  <div>
    <Part part={part1}/>
    <Part part={part2}/>
    <Part part={part3}/>
  </div>
  )
}

const Total = (props) => {
  let part1 = props.parts[0];
  let part2 = props.parts[1];
  let part3 = props.parts[2];

  return(
    <div>
      <p>The total number of exercises is {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;
