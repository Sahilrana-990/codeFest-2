import React from 'react'


export  function About(props) {
  return (
    <>
      <div className='about-section'>
        <img src={props.src} alt=''/>
      </div>
    </>
  )
}

export  function AboutText(props) {
  return (
    <>
      <div className='about-text'>
          <span></span>
          <span></span>
          <span></span>
          <div className='text'>
            <h1>{props.head}</h1>
            <p>{props.headline}</p>
          </div>
      </div>
    </>
  )
}

