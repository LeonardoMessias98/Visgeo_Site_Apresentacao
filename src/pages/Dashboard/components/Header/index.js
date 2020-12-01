import React from 'react'

import { Container } from './styles';

import Logo from '../../../../assets/visgeo_logo.png';
import bgHeader from '../../../../assets/visgeo_wallpaper.png';
import background_app from '../../../../assets/background_nologo.png';

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
        <img 
          src={background_app} 
          className="background" 
          alt="background_app"
        />
        
        <img 
          src={bgHeader} 
          className="logo" 
          alt="logo"
        />

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