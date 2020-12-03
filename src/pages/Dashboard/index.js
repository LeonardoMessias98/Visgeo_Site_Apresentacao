import React from 'react'

import { Container } from './styles';

import Header from './components/Header';
import Footer from './components/Footer';
import Learn from './components/Learn';
import Info from './components/Info';

import token from '../../assets/gifs/token.gif'
import carga from '../../assets/gifs/carga.gif'
import de_para from '../../assets/gifs/de_para.gif'
import banco from '../../assets/gifs/banco.gif'
import usabilidade from '../../assets/gifs/usabilidade.gif'

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Info />  

      <Learn 
        id="carga"
        gif_animado={carga}
        title="Carga de shapefiles"
        descriptions={["Com a VisGeo, a sua operação poderá realizar a carga de dados de shapefiles em banco de dados de forma simples, ágil e customizável."]}
      />    

      <Learn 
        id="de-para"
        gif_animado={de_para}
        title="Autonomia"
        inverted
        descriptions={["Ao realizar o envio de um shapefile, é possível configurar, de forma fácil e intuituva, quais dados serão armazenados e para onde eles serão destinados em sua base de dados."]}
      />    
        
      <Learn 
        id="banco"
        gif_animado={banco}
        title="Praticidade"
        descriptions={["Acesse seu banco de dados e recupere shapefiles de forma fácil e intuitiva, realizando o download de todos os arquivos compactados."]}
      />    

      <Learn 
        id="simples"
        gif_animado={usabilidade}
        title="Usabilidade"
        descriptions={["Todas as etapas de uso da ferramenta foram construídas de forma minimalista e visando errar distrações, aumentando a produtividade da operação de nossos clientes."]}
        inverted
      />    
      <Learn 
        id="segurança"
        gif_animado={token}
        title="Segurança"
        descriptions={["Para a utilização de nossa ferramenta é necessário que todos os usuários sejam cadastrados e autenticados no sistema."]}
      />    

      <Footer />
    </Container>
  )
}

export default Dashboard;