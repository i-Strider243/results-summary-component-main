import React, { useEffect, useState } from 'react'
import data from '/data.json'
import Tablet from './Tablet'
import Button from './Button'


const Summary = ({setScore}) => {
  const [summaries] = useState(data);

  const sumScores = () => {
    const sum = data.reduce((sum,item) => {
      return sum += Number(item.score)
    },0)
    return Math.floor(sum / data.length)
  }

  useEffect(() => {
    const newScore = sumScores()
    setScore(newScore)
  },[setScore])

  return (
    <div className='tablets'>
      <h3>Summary</h3>
      <div className='tablet__container'>

      {summaries.map(item => {
        const {id,category,score,icon} = item

        return <Tablet key={id} icon={icon} category={category} score={score} />
      })}
      </div>
      <Button text="Continue" />
    </div>
  )
}

export default Summary
