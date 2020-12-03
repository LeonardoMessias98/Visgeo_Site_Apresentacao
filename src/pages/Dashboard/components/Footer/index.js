import React from 'react'

import cristiane from '../../../../assets/C.jfif';
import evandro from '../../../../assets/E.jfif';
import danrley from '../../../../assets/J.jfif';
import henrique from '../../../../assets/W.png';
import leonardo from '../../../../assets/L.jfif';
import luis from '../../../../assets/Lu.jpg';
import matheus from '../../../../assets/M.jfif';
import pedro from '../../../../assets/P.jfif';
import raquel from '../../../../assets/R.jfif';


import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <footer> 
        <a href={'https://github.com/CrisRRafael'} target='blank'>
          <img src={cristiane} alt="Cristiane"/>
          
          <span>
            Cristiane
          </span>
        </a>
        
        <a href={'https://github.com/EvandroRBR'} target='blank'>
          <img src={evandro} alt="Evandro"/>
          
          <span>
            Evandro
          </span>
        </a>

        <a href={'https://github.com/justhenrique'} target='blank'>
          <img src={henrique} alt="Henrique"/>
          
          <span>
            Henrique
          </span>
        </a>

        <a href={'https://github.com/JDanrley'} target='blank'>
          <img src={danrley} alt="José"/>
          
          <span>
            José
          </span>
        </a>

        <a href={'https://github.com/LeonardoMessias98'} target='blank'>
          <img src={leonardo} alt="Leonardo"/>
          
          <span>
            Leonardo
          </span>
        </a>

        <a href={'https://github.com/LuisGuilhermeSousa'} target='blank'>
          <img src={luis} alt="Luis"/>
          
          <span>
            Luis
          </span>
        </a>

        <a href={'https://github.com/MatheusCampos-450'} target='blank'>
          <img src={matheus} alt="Matheus"/>
          
          <span>
            Matheus
          </span>
        </a>

        <a href={'https://github.com/PedroMendoncaBR'} target='blank'>
          <img src={pedro} alt="Pedro"/>
          <span>
            Pedro
          </span>
        </a>

        <a href={'https://github.com/raquelribeiro2'} target='blank'>
          <img src={raquel} alt="Raquel"/>
          <span>
            Raquel
          </span>
        </a>

      </footer>
    </Container>
  )
}

export default Footer
