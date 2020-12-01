import React from 'react'

import { Container } from './styles';
import Header from './components/Header';
import Learn from './components/Learn';
import Info from './components/Info';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Info />  
      <Learn />    
    </Container>
  )
}

export default Dashboard;