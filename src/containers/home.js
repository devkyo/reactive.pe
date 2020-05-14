import React from 'react';

import Layout from '../components/layouts/Layout'


import  haywardflight from '../../src/assets/images/haywardflight.png';
import  hosthinks from '../../src/assets/images/hosthinks.png';





const home = () => {
  return(
   <Layout>
      <div className="wrapper">
        <section className="main">
          <h1 className="main__title">Creamos productos digitales que <span className="main__span">funcionan</span></h1>
          <h4 className="main__subtitle">Somos una agencia digital de Lima que ayuda a usuarios y empresas a alcanzar sus objetivos diseñando y construyendo productos digitales significativos y experiencias interactivas.</h4>
        </section>
        {/* <span>https://strakzat.com/</span> */}
        <section className="card">
          <div className="card__grid">
            <div className="card__item haywardflight">
              <h3 className="card__url">HAYWARDFLIGHT.COM</h3>
              <h2 className="card__title">We make it happen, plan your trip today!</h2>
              <img className="card__img" src={haywardflight} alt=""/>
            </div>
            <div className="card__item hosthinks">
              <h3 className="card__url">HOSTHINKS.COM</h3>
              <h2 className="card__title">Elije tu dominio perfecto en Hosthinks!</h2>
              <img className="card__img" src={hosthinks} alt=""/>
            </div>
            <div className="card__item haywardflight">
              <h3 className="card__url">HAYWARDFLIGHT.COM</h3>
              <h2 className="card__title">We make it happen, plan your trip today!</h2>
              <img className="card__img" src={haywardflight} alt=""/>
            </div>
            <div className="card__item hosthinks">
              <h3 className="card__url">HOSTHINKS.COM</h3>
              <h2 className="card__title">We make it happen, plan your trip today!</h2>
              <img className="card__img" src={hosthinks} alt=""/>
            </div>
          </div>
         
        </section>
      </div>
   </Layout>
  )
}

export default home;