import React from 'react'
import '../App.css'
export  function Facility(props) {
  return (
    <>
      <span className="fac1">
              <p>{props.data["1"]}</p>
              <p>{props.data["2"]}</p>
              <p>{props.data["3"]}</p>
              <p>{props.data["4"]}</p>
        </span>
    </>
  )
}

export function Srv(props) {
  return (
    <>
      <span className="srv">
          <img src={props.src} alt=''/> 
          <div id='description'>
             <h2>{props.text}</h2> 
          </div>
      </span>
    </>
  )
}
