import StatisticLine from './StatisticLine'

function Statistics(props) {

  return (
    <div>
      <h1>statistics</h1>
      {props.good === 0 & props.neutral === 0 & props.bad === 0 ? <p>no feedback given</p> :
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.good + props.neutral + props.bad}/>
          <StatisticLine text="average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)}/>
          <StatisticLine text="positive" value={(props.good * 100)/(props.good + props.neutral + props.bad)}/>
        </tbody>
      </table>}
    </div>
  );
}

export default Statistics;
