import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Person from './Person'

class Team extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className='teamHolder'>
        <h3 className='teamHeader'>Team 1</h3>
        <div >
          <Person />
        </div>
      </div>
    )
  }
}

export default Team
