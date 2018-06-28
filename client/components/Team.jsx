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
      <div>
        <h3>Team 1</h3>
        <div className='teamHolder'>
          <Person />
        </div>
      </div>
    )
  }
}

export default Team
