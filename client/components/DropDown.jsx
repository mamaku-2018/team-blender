import React from 'react'

class DropDown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'shaka'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div className="dropDown">
        <form onSubmit={this.handleSubmit}>
          <label>
          Pick your emoji:
            <select value={this.state.value} onChange={this.handleChange}>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default DropDown
