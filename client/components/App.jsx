import React from 'react'
import Radiobuttons from './Radiobuttons'
import {HashRouter as Router, Route} from 'react-router-dom'
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
          
        </div>
      </Router>
    )
  }
}

export default App
