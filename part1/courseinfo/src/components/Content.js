import Part from './Part'

const Content = (props) => {

  return (
    <>
      {props.parts.map((element, index) => (<Part key={index} name={element.name} exercises={element.exercises}/>))}
    </>
  )
}

export default Content