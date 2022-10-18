import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

function App() {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => (setGood(good+1))}/>
      <Button text="neutral" onClick={() => (setNeutral(neutral+1))}/>
      <Button text="bad" onClick={() => (setBad(bad+1))}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;
