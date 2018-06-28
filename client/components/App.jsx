import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RadioButtons from './RadioButtons'
import Input from './Input'
import Pool from './NamesPool'
import Submit from './Submit'
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
          <div className='addPeople'>
            <Route path='/' component={Header} />
            <Route path='/' component={RadioButtons} />
            <Route path='/' component={Input} />
            <Route path='/' component={Pool} />
            <Route path='/' component={Submit} />
          </div>
        </div>

      </Router>
    )
  }
}

export default App
