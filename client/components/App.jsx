import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RadioButtons from './Radiobuttons'
import Input from './Input'
import DropDown from './Dropdown'
import Pool from './NamesPool'
import Results from './Submit'

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
          <Route path='/home' component={Header} />
          <Route path='/home' component={RadioButtons} />
          <Route path='/home' component={Input} />
          <Route path='/home' component={DropDown} />
          <Route path='/home' component={Pool} />
          <Route path='/home' component={Results} />
        </div>
      </Router>
    )
  }
}

export default App
