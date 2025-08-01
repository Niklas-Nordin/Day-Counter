"use client"

import './App.css'
import { useState } from 'react';




function App() {
  
  const [steps, setSteps] = useState(1);
  const [counts, setCounts] = useState(0);

  const handleStepUpChange = () => {
    setSteps(steps + 1);
  }

  const handleStepDownChange = () => {
      setSteps(steps - 1);
  }

  const handleCountUpChange = () => {
    setCounts(counts + steps)
  }

  const handleCountDownChange = () => {
    setCounts(counts - steps);
  }

  const dateFinder = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + counts);
    
    return `${counts} days from today is ${futureDate.toDateString()}`
  }
  
  return (
    <div className='outer-container'>
        <h1 className='h1'>Day counter </h1>
        <p className='description'>Increase the number of steps to increase the number of steps for each count. The number of counts will be the number of days from today, which date will it be?</p>

      <div className='inner-container'>
        <div className='steps'>
          <button className='btn' onClick={handleStepDownChange}>-</button>
          <span>Steps: {steps}</span>
          <button className='btn' onClick={handleStepUpChange}>+</button>
        </div>

        <div className='counts'>
          <button className='btn' onClick={handleCountDownChange}>-</button>
          <span>Counts: {counts}</span>
          <button className='btn' onClick={handleCountUpChange}>+</button>
        </div>

        <h3 className='dates'>{dateFinder()}</h3>
      </div>
    </div>
  )
}

export default App
