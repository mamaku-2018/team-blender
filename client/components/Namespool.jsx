import React from 'react'

const Names = (props) => {
  return (
    <li style={{name: props.name}}>
      {props.name}
    </li>
  )
}

export default Names
