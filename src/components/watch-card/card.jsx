import React from 'react'
import './watch-card.scss'


const CardWatch = ({watchId, watchImg}) => {
  return (
    <div className="card-img">
        <img src={watchImg} alt={watchId} />
    </div>
  )
}

export default CardWatch