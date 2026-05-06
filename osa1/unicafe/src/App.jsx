import { useState } from 'react'

const Statistics = ({votesGood, votesNeutral, votesBad}) => {
  if (votesGood + votesNeutral + votesBad === 0){
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }

  const total = votesGood + votesNeutral + votesBad
  const points = votesGood - votesBad
  const voteAverage = total === 0 ? 0 : points / total
  const positive = total === 0 ? 0: votesGood / total * 100

  return (
        <div>
          <h3>Statistics</h3>
          <table>
            <tbody>
                <StatisticLine text='Good' value={votesGood}/>
                <StatisticLine text='Neutral' value={votesNeutral}/>
                <StatisticLine text='Bad' value={votesBad}/>
                <StatisticLine text='All' value={total}/>
                <StatisticLine text='Average' value={voteAverage}/>
                <StatisticLine text='Positive' value={positive}/>
            </tbody>
          </table>
        </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const voteForGood = () => {   
    setVotes({...votes, good: votes.good + 1})
    const updatedTotal = (votes.good + 1)
    console.log("Total votes for good: ", updatedTotal)
  }

  const voteForNeutral = () => {
    setVotes({...votes, neutral: votes.neutral + 1})
    const updatedTotal = (votes.neutral + 1)
    console.log("Total votes for neutral: ", updatedTotal)
  }

  const voteForBad = () => {
    setVotes({...votes, bad: votes.bad + 1})
    const updatedTotal = (votes.bad + 1)
    console.log("Total votes for bad: ", updatedTotal)
  }

  return (
    <div>
      <h3>Give feedback</h3>
      <Button onClick={voteForGood} text='Good'/>
      <Button onClick={voteForNeutral} text='Neutral'/>
      <Button onClick={voteForBad} text='Bad'/>
      <Statistics votesGood={votes.good} votesNeutral={votes.neutral} votesBad={votes.bad}/>     
    </div>
  )
}

export default App