import React from 'react';

import Layout from '../components/layouts/Layout'
import styled from 'styled-components'


const MainTitle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`
const Title = styled.h1`
  font-size: 90px!important;
  font-family: Reactive;
  font-weight: 700;
  text-align: center;

`
const MainSubTitle = styled.h4`
  font-weight: 400;
  font-family: Roboto;
  text-align: center;
  opacity: .8;
` 





const home = () => {
  return(
   <Layout>
      <div className="container">
        <MainTitle>
          <Title>Creamos productos digitales que <span className="main-title-span">funcionan</span></Title>
        </MainTitle>
        <MainSubTitle>Somos una agencia digital de Lima que ayuda a usuarios y empresas a alcanzar sus objetivos diseñando y construyendo productos digitales significativos y experiencias interactivas.</MainSubTitle>

        
      </div>
   </Layout>
  )
}

export default home;