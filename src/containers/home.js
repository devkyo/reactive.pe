import React from 'react';

import Layout from '../components/layouts/Layout'
import styled from 'styled-components'


const MainTitle = styled.div`
  text-align: center;
  font-weight:bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

const mainh1 = {
  fontSize: '96px',
  fontWeight: 'bold'

}


const home = () => {
  return(
   <Layout>
      <div className="container">
        <MainTitle>
          <h1 style={{fontSize: '96px',fontWeight: 'bold'}}>We create digital products that <span style={{ opacity: '0.9' }}>Work</span></h1>
        </MainTitle>
        
      </div>
   </Layout>
  )
}

export default home;