import React from 'react';
import { NavLink, Link } from 'react-router-dom'
// assets 
import brandReactive  from '../../assets/images/reactive.svg'

const navbar = () => {
  return(
    <header className="header">
      <div className="wrapper">
        <div className="header__content">
          <Link to='/'><img src={brandReactive} alt="" className="header__logo"/></Link>
          <input type="checkbox" id="menu" className="navigation__checkbox"/>
          <ul className="navigation animate__animated animate__fadeIn">
            <li className="navigation__item">
              <NavLink to="/services">Equipo</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/services">Servicios</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/services">Proyectos</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/services">Hablemos</NavLink>
            </li>
          </ul>
          
          <label htmlFor="menu" className="navigation__button">
            <span className="ico__line"></span>
            <span className="ico__line"></span>
            <span className="ico__line"></span>
          </label>
        </div>
      </div>
    </header>
    
  )
}

export default navbar

