import React from 'react'
import Team from './Team'
import {fetchPeople} from '../apiClient'

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      people: [],
      teams: 0
    }
    this.randomisePeople = this.randomisePeople.bind(this)
    this.setPeople = this.setPeople.bind(this)
  }

  setPeople () {
    return fetchPeople()
      .then(people => {
        this.setState({people: people.students})
      })
      .catch(err => {
        this.setState({errorMessage: err.message})
      })
  }
  componentDidMount () {
    this.setPeople()
  }

  randomisePeople (start) {
    var startArr = [...start]
    var newArr = []
    for (var i = startArr.length - 1; i >= 0; i--) {
      if (i === 0) {
        newArr.push(startArr[0])
      } else {
        var ranVal = (Math.random() * 100) % startArr.length
        newArr.push(startArr[ranVal])
        startArr.splice(ranVal, 1)
      }
    }
    return newArr
  }

  render () {
    const middle = this.state.people.length / 2
    const team1 = this.state.people.slice(0, middle)
    const team2 = this.state.people.slice(middle)

    return (
      <div>
        <div className='header'>
          <h2>Results</h2>
        </div>
        <Team people={team1}/>
        <Team people={team2}/>
        <div className ='submit'>
          <button>Reroll</button>
          <button>Accept Team</button>
        </div>
      </div>
    )
  }
}

export default Results
