import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import Home from '../containers/home'
import About from '../containers/about'
import Services from '../containers/services'
import Projects from '../containers/projects'
import Contact from '../containers/contact'

import NoMatch from '../components/NoMatch'

const router = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/team' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
      
    </BrowserRouter>
  )
}

export default router

