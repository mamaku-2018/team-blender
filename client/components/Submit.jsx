import React from 'react'
import { HashRouter as Route, Link } from 'react-router-dom'

import Results from './Results'

const Submit = () => {
  return (
    <div className='submit'>
      <Route path='/results' component={Results}/>
      <button>Go to Results</button>
    </div>
  )
}

export default Submit
