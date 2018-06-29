import React from 'react'

import Namespool from './Namespool'

import {addStudent} from '../apiClient'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      names: ['Shane', 'Rachael']
    }

    this.insertStudent = this.insertStudent.bind(this)
    // this.deleteChange = this.deleteChange.bind(this)
    this.updateNewStudent = this.updateNewStudent.bind(this)
  }

  insertStudent () {
    addStudent(this.state.name)
      .then((newStudent) => {
        this.setState({
          name: '',
          names: [...this.state.names, this.state.name]
        })
      })
  }

  updateNewStudent (event) {
    this.setState({
      name: event.target.value

    })
  }

  render () {
    return (
      <div className="input">
        <div classsName="radioButtons">
          <div className="radioAdd">
            <label>
              <input type="radio" name="radAnswer" value="option1" checked={true} />Add
            </label>
          </div>
          <div className="radioRemove">
            <label>
              <input type="radio" name="radAnswer" value="option2" />Remove
            </label>
          </div>
        </div>
        <div className='clear'></div>
        <label>
          Angel Name:<input type="text" name="name" value={this.state.name} onChange={this.updateNewStudent} />
        </label>
        <label>
          Pick your emoji:<select emoji={this.state.emoji} onChange={this.handleChange}>
            <option emoji="shaka">Shaka</option>
            <option emoji="hearteyes">Heart Eyes</option>
            <option emoji="poo">Poop</option>
            <option emoji="smile">Smile</option>
            <option emoji="crylaugh">Cry Laugh</option>
            <option emoji="sunglasses">Sunglasses</option>
            <option emoji="kiss">Kiss</option>
            <option emoji="peach">Peach</option>
            <option emoji="heart">Red Heart</option>
            <option emoji="angel">Angel</option>
          </select>
        </label>
        <input type="submit" value="Submit" onClick={this.insertStudent}/>

        <ul>
          {this.state.names.map(name => {
            return (
              <Namespool
                key={name}
                name={name}/>
            )
          })}
        </ul>

      </div>
    )
  }
}

export default Input
