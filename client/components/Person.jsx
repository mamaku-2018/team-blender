import React from 'react'

function Person (props) {
  return (
    <div className="personCard">
      <h4 className='personHeader'> {props.person.name} </h4>
      hello this is text
    </div>
  )
}

export default Person
