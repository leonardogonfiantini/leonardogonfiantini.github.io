import React from 'react'
import './work_style.scss'


function Work({title, img, description}) {
  return (
    <div className='work'>
        <h1> {title} </h1>
        <img src={img}/>
        <p> {description} </p>
    </div>
  )
}

export default Work