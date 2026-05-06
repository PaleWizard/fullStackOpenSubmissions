import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({anecdote}) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdote}</p>
    </>
  )
}

const VoteCounter = ({voteCount}) => {
  return (
    <p>Has {voteCount} votes.</p>
  )
}

const WinningAnecdote = ({anecdotes, votes}) => {
  let max = votes[0]
  let winningAnecdote = 0
  for (let index = 1; index < votes.length; index++){
    if (votes[index] > max){
      max = votes[index]
      winningAnecdote = index
    }
  }
    
  if (max > 0){
    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[winningAnecdote]}</p>
        <VoteCounter voteCount={max}/>
      </div>
    )
  }

  return
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    const randomValue = anecdotes[random] 
    setSelected(random)
    console.log('Random value is: ', random)  
  }

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]}/>
      <VoteCounter voteCount={votes[selected]}/>
      <Button onClick={nextAnecdote} text='Next anecdote'/>
      <Button onClick={voteForAnecdote} text='Vote'/>
      <WinningAnecdote anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App