import React from 'react';
import Header from '../header/Header'

import styled from 'styled-components'


// fonts 




const Main = styled.div `
  height: auto;
  display: block;
`
const Layout = ({children}) => {
  return(
    <Main>

      <Header/>
      <div className="animate__animated animate__fadeInUp" style={{ animationDuration: '.3s' }}>
        { children }
      </div>
    </Main>
  )
}

export default Layout