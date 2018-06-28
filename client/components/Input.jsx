import React from 'react'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      emoji: 'shaka'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <div className="input">
        <form onSubmit={this.handleSubmit}>
          <label>
          Angel Name:
            <input type="text" name={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
          Pick your emoji:
            <select emoji={this.state.emoji} onChange={this.handleChange}>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Input
