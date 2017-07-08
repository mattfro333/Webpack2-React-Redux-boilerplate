const css = require('../App.sass')

import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import manageStore from '../reducer.js'

import Home from './Home/Home'
import About from './About/About'

let store = createStore(manageStore)
export default store

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById('root'))
