import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import RadioButtons from './Radiobuttons'
import Input from './Input'
import Pool from './NamesPool'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <Route path='/home' component={Pool} />
          <Route path='/home' component={RadioButtons} />
          <Route path='/home' component={Input} />
        </div>
      </Router>
    )
  }
}

export default App
