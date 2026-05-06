const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      {props.parts.map(part => (
        <Part partName={part.name} exercises={part.exercises}/>
      ))}
    </>
  )
}

const Total = (props) => {
  console.log(props)
  const exercises = props.parts.map(e => e.exercises)
  const sum = (l1, l2, l3) => 
    {return l1 + l2 + l3 }
  return (
      <p>
        Total of exercises {sum(exercises[0], exercises[1], exercises[2])}
      </p>
  )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.partName} {props.exercises}</p>
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
  )
}

export default App