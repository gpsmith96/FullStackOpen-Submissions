const Total = (props) => {
  const sum = props.parts.reduce((previousValue, currentValue) => previousValue + currentValue.exercises, 0);
  return (
    <>
      <h4>Number of exercises {sum}</h4>
    </>
  )
}

export default Total