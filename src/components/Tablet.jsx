import React from 'react'

const Tablet = ({icon,category,score}) => {
  return (
    <div className={`tablet ${category.toLowerCase()}`}>
      <div className='tablet__info'>
        <img src={icon} alt={`${category} icon`} />
        <span>{category}</span>
      </div>
      <div className='tablet__box'>
        <span className='tablet__scorebox'><strong className='tablet__score'>{score}</strong> / 100</span>
      </div>
    </div>
  );
}

export default Tablet
