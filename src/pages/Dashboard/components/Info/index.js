import React from 'react'
import YouTube from 'react-youtube';

import { BiLock, BiHappy } from 'react-icons/bi';
import { GoSettings } from 'react-icons/go';
import { BsCloudUpload } from 'react-icons/bs';
import { FiDatabase } from 'react-icons/fi';

import { Container } from './styles';

const Info = () => {
  const handleNavigateToDiv = (id) => {
    const divToScroll = document.querySelector(`#${id}`);
    if (divToScroll) {
      divToScroll.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }


  return (
    <Container>
      <section className="marketing">
        <h1>
          A Ferramente perfeita para você e a sua empresa
        </h1>

        <span>
          Na VisGeo você pode tratar o seus dados de acordo com o seu gosto
        </span>
      </section>
  
      <YouTube videoId="hQMvhnpsWpU" />      
      
      <section className="advantages">     
        <section>
          <BsCloudUpload onClick={() => handleNavigateToDiv('carga')}/>
          
          <p>
            Faça carga e descarrga de dados geográficos (ponto, linha e polígono).
          </p>
        </section>

        <section>
          <GoSettings onClick={() => handleNavigateToDiv('de-para')}/>

          <p>
            O usuário possui autonomia, com o sistema DE → PARA ele decide o que será salvo.
          </p>
        </section>

        <section>
          <FiDatabase onClick={() => handleNavigateToDiv('banco')}/>

          <p>
            Utilize o seu banco de dados e tenha mais segurança.
          </p>
        </section>

        <section>
          <BiHappy onClick={() => handleNavigateToDiv('simples')}/>

          <p>
           Sistema simples e intuitivo, desenvolvido pensando nos nossos usuários.
          </p>
        </section>

        <section>
          <BiLock onClick={() => handleNavigateToDiv('segurança')}/>

          <p>
            Sistema construido em cima de um token criptografado.
          </p>
        </section>
      </section>
    </Container>
  )
}

export default Info;
