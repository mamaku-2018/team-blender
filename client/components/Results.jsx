import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Team from '/Team'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <h1>Results</h1>
        <Team />
        <div className ='home'>
          <button>Home</button>
        </div>
      </div>
    )
  }
}

export default Results
