import React from 'react'
import {HashRouter as Link} from 'react-router-dom'

const Submit = () => {
  return (
    <div className='submit'>
      <Link to='/results' ><button>Go to Results</button></Link>
    </div>
  )
}

export default Submit
