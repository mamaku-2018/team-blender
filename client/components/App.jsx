import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RadioButtons from './RadioButtons'
import Input from './Input'
import DropDown from './Dropdown'
import Pool from './NamesPool'
import Results from './Submit'
// import Person from './Person'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render () {
    return (
      <Router>
        <div className='app'>
          <Route path='/' component={Header} />
          <Route path='/' component={RadioButtons} />
          <Route path='/' component={Input} />
          <Route path='/' component={DropDown} /> 
          <Route path='/' component={Pool} />
          <Route path='/' component={Submit} />
        </div>
      </Router>
    )
  }
}

export default App
