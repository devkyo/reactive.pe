import React from 'react';

import Layout from '../components/layouts/Layout'

import styled from 'styled-components'


const MainCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function NoMAtch(){
  return(
    <Layout>
      <MainCenter>
        No encontramos resultados
      </MainCenter>
    </Layout>
  )
}

