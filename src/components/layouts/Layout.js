import React from 'react';
import Header from '../header/Header'

import styled from 'styled-components'

const Main = styled.div `
  height: auto;
  display: block;
`
const Layout = ({children}) => {
  return(
    <Main>
      <Header/>
      <div className="container">
        { children }
      </div>
    </Main>
  )
}

export default Layout