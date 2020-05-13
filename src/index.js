import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'animate.css'
import '../src/assets/styles/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

