import './App.css'
import React, {useEffect, useRef, useState} from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import StopWatch from './StopWatch'
import BestTime from './BestTime'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [bestTime, setBestTime] = useState(0 || JSON.parse(localStorage.getItem("best")))

  useEffect(() => {
      let interval
      if(!tenzies && start) {
          interval = setInterval(() => {
              setTime(prevTime => prevTime + 10)
          }, 10)
      } else {
          clearInterval(interval)
          localStorage.setItem("best", JSON.stringify(time))
      }
      return () => clearInterval(interval)
  }, [tenzies, start, time])


  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const firstDieValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstDieValue)
    if(allDiceHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  useEffect(() => {
    const handleClick = () => {
      if(!tenzies) {
        setCount(count => count + 1)
      } else { setCount(0) }
    }
    const element = ref.current
    element.addEventListener('click', handleClick)
    return () => element.removeEventListener('click', handleClick)
  }, [tenzies])

  useEffect(() => {
    if(tenzies && time < bestTime) {
      setBestTime(time)
    }
  }, [tenzies, time, bestTime])

  function generateDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1, 
      isHeld: false,
      id: nanoid()
    }
  }
    
    function allNewDice() {
        let randomDice = []
        for(let i = 0, j=10; i < j; i++) {
            randomDice.push(generateDie())
        }
        return randomDice
    }

    function holdDice(id) {
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
      }))
    }
    

  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  )

  function rollDice() {
    if(!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return !die.isHeld ? generateDie() : die
      }))
      setStart(true)
    } else {
      setTenzies(false)
      setDice(allNewDice())
      setTime(0)
    }
  }

  // styles for the confetti package
  const styles = {
    width: '100%',
    height: '100%'
  }


  return (
    <main>
      <div>
        {tenzies && <Confetti style={styles}/>}
        <h1 className="Tenzies--title">Tenzies</h1>
        <p className="Tenzies--body">Roll until all dice are the same.<br/>
        Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='die-container'>
        {diceElements}
      </div>
      <div className='utilities-group'>
        <StopWatch time={time} />
        <h3 className='count'>No of rolls: {count}</h3>
        <BestTime best={bestTime} />
      </div>
      <button className="btn-roll" ref={ref} onClick={rollDice} >{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}