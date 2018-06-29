import React from 'react'

function Person (props) {
  return (
    <div className="personCard">
      <h4 className='personHeader'> {props.person.name} </h4>
    </div>
  )
}

export default Person
