import React from 'react'

class Radiobuttons extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='radiobuttons'>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option1" checked={true} />
        Add
            </label>
          </div>
          <div className="radio">
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

export default Radiobuttons
