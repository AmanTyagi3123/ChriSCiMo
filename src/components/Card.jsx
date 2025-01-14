import React from 'react'
import './card.css'

function Card({slide}) {
  return (
    <div className="card">
        <div className="imgBox">
            <img src={slide.bgImg} alt="" />
            <a href={slide.link}><i class="bi bi-play-fill"></i></a>
        </div>
        <div className="details">
            <p>{slide.description}</p>
        </div>
    </div>
  )
}

export default Card