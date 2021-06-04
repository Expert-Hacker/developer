import React from 'react'
import logo from '../images/logo_bg.png'
import {Link} from 'react-router-dom';
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
    return (
      <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm p-3 mb-5 bg-body  position-fixed w-100 fw-bold fs-6" >
  <div class="container-fluid logo_cont">
    <a class="navbar-brand p-0 m-0" href="#"><img src={logo} alt="Logo" height="40px"/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li class="nav-item px-3">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li class="nav-item px-3 " >
          {/* <a class="nav-link" href="/about">About</a> */}
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li class="nav-item px-3">
        <Link to="/contactus" className="nav-link">Contact</Link>
        </li>
        <li class="nav-item px-3">
        <Link to="/tryfree" className="nav-link">Try Free</Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
      <li class="nav-item ">
        {/* <Link to="/login" className="nav-link">Login</Link> */}
        <Link to="/logout"><button type="button" class="btn btn-primary mx-2 fw-bold px-4">Logout</button></Link>
        <Link to="/login"><button type="button" class="btn btn-primary mx-2 fw-bold px-4">Login</button></Link>
        </li>
        <li class="nav-item ">
        <Link to="/signup" className="nav-link">Signup</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>
      </>
    )
}

export default Navbar
