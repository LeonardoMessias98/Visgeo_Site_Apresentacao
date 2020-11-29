import React from 'react'

import { BiLock } from 'react-icons/bi';
import { GoSettings } from 'react-icons/go';
import { BsCloudUpload } from 'react-icons/bs';

import { Container } from './styles';

const Info = () => {
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

      
      <section className="advantages">     
        <section>
          <BsCloudUpload />
          
          <p>
            Faça carga e descarrga de dados geográficos (ponto, linha e polígono).
          </p>
        </section>

        <section>
          <GoSettings />

          <p>
            Permitimos você fazer configurações de para.
          </p>
        </section>

        <section>
          <BiLock />

          <p>
            Utilize o seu banco de dados e tenha mais segurança.
          </p>
        </section>
      </section>
    </Container>
  )
}

export default Info;
