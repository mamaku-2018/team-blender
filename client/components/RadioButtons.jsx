import React from 'react'

class RadioButtons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='radioButtons'>
        <form>
          <div className="radioAdd">
            <label>
              <input type="radio" value="option1" checked={true} />
        Add
            </label>
          </div>
          <div className="radioRemove">
            <label>
              <input type="radio" value="option2" />
       Remove
            </label>
          </div>

        </form>
      </div>
    )
  }
}

export default RadioButtons
