import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Landingpagemitzit from './views/landingpagemitzit'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Landingpagemitzit} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
