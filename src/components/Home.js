import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component{
  render(){
    return(
      <div>
        <p>Hello from home</p>
        <Link to="/about">About page</Link>
      </div>
    )
  }
}
export default Home
