import React from 'react'

const Result = ({score}) => {
  return (
    <div className='result gradient'>
      <span>Your Result</span>
      <div className='result__scorebox'>
        <div className='result__score'>{score}</div>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default Result
