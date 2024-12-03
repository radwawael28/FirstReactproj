import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    
    <div className="col-md-2 p-0 ">
    <nav className="navbar navbar-expand-lg navbar-light bg-light top-0 start-0 position-fixed ">
  <div className="container-fluid ">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <div className="px-4 py-5 z-index d-lg-block text-center">
    <img className='rounded-circle ' alt="" />
      <h1 className="text-dark"><a className="text-dark mb-3" href="#">Jackson Ford</a> </h1>
        <p className="mb-4"><a href="#">UI/UX/Designer</a> in Philippines</p>

      <ul className="navbar-nav  text-center d-block mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page"  to="/home" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/experience">Experience</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/work">Work</NavLink>
        </li>
      </ul>
     
   </div>
  </div>
  </div>
</nav>

    </div>

    
  )
}
