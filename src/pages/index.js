import React from "react"
import {Link} from "gatsby"
import logo from '../images/beach.jpg';


export default function Home() {
  return (
    <div style={{ color: `blue` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Kah Wee 's Portfolio </h1>
      <p>Data Scientist</p>
      <img src={logo} />

    </div>
	
	
  )
}























