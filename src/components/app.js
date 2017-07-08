const css = require('../app.sass')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    )
  }
}


render(<App/>, document.getElementById('root'))
