import React from 'react';
import { NavLink } from 'react-router-dom'
// assets 
import brandReactive  from '../../assets/images/reactive.svg'

const navbar = () => {
  return(
    <header className="header">
      <div className="wrapper">
        <div className="header__content">
          <img src={brandReactive} alt="" className="header__logo"/>
          <input type="checkbox" id="menu" className="navigation__checkbox"/>
          <ul className="navigation">
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

