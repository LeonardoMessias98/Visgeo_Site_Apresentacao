import React from 'react'

import { Container } from './styles';

import Logo from '../../../../assets/visgeo_logo.png';

const Header = () => {
  return (
    <Container>
      <header>        
        <img src={Logo} alt="logo"/>
      
        <button>
          Começar a usar
        </button>
      </header>

      <section className="presentation">
        <h1>
          Para seus problemas, nos temos a solução
        </h1>
        <h2>
          VisGEO
        </h2>

        <button>Saiba mais</button>
      </section>

    </Container>
  )
}


export default Header;