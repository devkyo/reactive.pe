import React from 'react';
import { Link, NavLink } from "react-router-dom";


const navbar = () => {
  return(
    <div className="container">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <Link class="navbar-brand" to='/'><img src="https://reactive.pe/assets/images/brandlogo.svg" alt=""/></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink to='/team' className="nav-link" exact activeClassName="active">Equipo</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/about' className="nav-link" activeClassName="active">Servicios</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/projects' className="nav-link" activeClassName="active">Proyectos</NavLink>
            </li>
            <li class="nav-item">
            <NavLink to='/contact' className="nav-link" activeClassName="active">Contacto</NavLink>
            </li>
          </ul>

      </div>
    </nav>
    </div>
  )
}

export default navbar

