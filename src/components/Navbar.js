import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container">
  <a className="navbar-brand" href="/">{prop.title}</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        {/* <Link className="nav-link" to="/">Home</Link> */}
        <a className="nav-link" href="/">Home</a>
      </li> 
      {/* <li className="nav-item">
        <Link className="nav-link" to="/About">{prop.about}</Link>
      </li> */}
     
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
 
  </div>
  <div className="form-check form-switch text-light">
  <input className="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${prop.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{prop.mode==='dark'?'Light Mode':'Dark Mode'}</label>
</div>
</div>
</nav>
  )
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    about: PropTypes.string}

        Navbar.defaultProps = {
            title: "Title Here",
            about : "About US"
        }
