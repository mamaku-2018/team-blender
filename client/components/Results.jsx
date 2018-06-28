import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Team from './Team'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <div className='header'>
          <h1>Results</h1>
        </div>
        <Team />
        <div className ='submit'>
          <button>Reroll</button>
          <button>Accept Team</button>
        </div>
      </div>
    )
  }
}

export default Results
