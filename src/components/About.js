import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component{
  render(){
    return(
      <div>
        <h1>Hello from about</h1>
        <Link to="/">Home page</Link>
      </div>
    )
  }
}

export default About
