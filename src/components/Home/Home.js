import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store from '../App.js'

import './Home.sass'

class Home extends Component{

  render(){
    return(
      <div>
        <h1 id="home-greeting" onClick={function(){store.dispatch({type: 'Savannah', payload: 'Savannah'})}}>Hello from home</h1>
        <Link to="/about">About page</Link>
      </div>
    )
  }
}
export default Home
