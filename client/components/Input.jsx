import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      emoji: ''
    }

    this.handleChange = this.handleChange.bind(this)
    // this.deleteChange = this.deleteChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    console.log(event)
    this.setState({
      name: '',
      value: event.target.value

    })
  }

  render () {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit}>
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
          Angel Name:<input className='nameIn' type="text" name={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
          Pick your emoji:<select className='dropDown' emoji={this.state.emoji} onChange={this.handleChange}>
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
          <div><input className="subBtn" type="submit" value="Submit" /></div>
        </form>
      </div>
    )
  }
}

export default Input
