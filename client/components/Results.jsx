import React from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Team from './Team'
import
class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  
  fetchPeople() {
ret

  }

  render () {
    return (
      <div>
        <div className='header'>
          <h2>Results</h2>
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
