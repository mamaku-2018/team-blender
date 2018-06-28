import React from 'react'
import Radiobuttons from './Radiobuttons'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <Radiobuttons />
      </div>
    )
  }
}

export default App
