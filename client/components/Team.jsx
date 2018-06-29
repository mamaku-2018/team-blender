import React from 'react'
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
        <div className="peopleContainer">

          {this.props.people.map(function (person) {
            return <Person key={person.id} person={person}/>
          })}

        </div>
      </div>
    )
  }
}

export default Team
