import React from 'react'

// import Namespool from './Namespool'

import {addStudent} from '../apiClient'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      names: ['Shane', 'Rachael', 'Michael', 'Caitlyn', 'Sam']
    }

    this.updateNewStudent = this.updateNewStudent.bind(this)
    this.insertStudent = this.insertStudent.bind(this)
  }

  insertStudent () {
    console.log('ssssssssssssssssssssssssssssssssssssssssssss')
    addStudent(this.state.name)
      .then((newStudent) => {
        console.log(newStudent.name)
        this.setState({
          name: '',
          names: [...this.state.names, newStudent.name]
        })
      })
  }
  // insertStudent () {
  //   addStudent(this.state.name)
  //     .then(console.log(newStudent))
  //   this.setState({
  //     name: '',
  //     names: [...this.state.names, this.state.name]
  //   })
  //   this.render()
  // }

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
          Angel Name:<input className="input" id="names" type="text" name="name" value={this.state.name} onChange={this.updateNewStudent} />
        </label>
        <label>
          Pick your emoji:<select emoji={this.state.emoji} onChange={this.handleChange}>
            <option value="shaka">Shaka</option>
            <option value="hearteyes">Heart Eyes</option>
            <option value="poo">Poop</option>
            <option value="smile">Smile</option>
            <option value="crylaugh">Cry Laugh</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="kiss">Kiss</option>
            <option value="peach">Peach</option>
            <option value="heart">Red Heart</option>
            <option value="angel">Angel</option>
          </select>
        </label>
        <input className='subBtn' type="submit" value="Submit" onClick={this.insertStudent}/>

        <ul>
          {this.state.names.map(name => (
            <li key={name}>
              name={name}
            </li>
          )
          )}
        </ul>

      </div>
    )
  }
}

export default Input
