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
import Projects from '../containers/projects'
import Contact from '../containers/contact'

import NoMatch from '../components/NoMatch'

const router = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/projects' component={Contact} />
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
      
    </BrowserRouter>
  )
}

export default router

