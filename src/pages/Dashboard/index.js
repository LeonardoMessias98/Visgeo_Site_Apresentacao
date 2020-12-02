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
      <Learn 
        id="carga"
        title="Carga e descarga"
        descriptions={["Faça carga e descarrga de dados geográficos (ponto, linha e polígono)."]}
        bgEnable
      />    
      <Learn 
        id="de-para"
        title="Autonomia"
        descriptions={["O usuário possui autonomia, com o sistema DE → PARA ele decide o que será salvo."]}
      />    
        
      <Learn 
        id="banco"
        title="Praticidade"
        descriptions={["Utilize o seu banco de dados e tenha mais segurança."]}
        bgEnable
      />    
      <Learn 
        id="simples"
        title="Usabilidade"
        descriptions={["Sistema simples e intuitivo, desenvolvido pensando nos nossos usuários."]}
      />    
      <Learn 
        id="segurança"
        title="Segurança"
        descriptions={["Sistema construido em cima de um token criptografado."]}
        bgEnable
      />    
    </Container>
  )
}

export default Dashboard;