import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './About.sass'

class About extends Component{
  render(){
    return(
      <div>
        <h1 id="about-greeting">Hello from about</h1>
        <Link to="/">Home page</Link>
      </div>
    )
  }
}

export default About
