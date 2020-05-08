import React from 'react';
import { Link, NavLink } from "react-router-dom";

// assets 
import brandReactive  from '../../assets/images/reactive.svg'

const navbar = () => {
  return(
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to='/'><img src={brandReactive} alt=""/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink to='/team' className="nav-link" exact activeclassName="active-nav">Equipo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/services' className="nav-link" activeclassName="active-nav">Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/projects' className="nav-link" activeclassName="active-nav">Proyectos</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to='/contact' className="nav-link" activeclassName="active-nav">Escribenos 🤙</NavLink>
            </li>
          </ul>

      </div>
    </nav>
    </div>
  )
}

export default navbar

