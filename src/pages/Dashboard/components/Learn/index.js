import React from 'react'

import { Container } from './styles';

const Learn = ({title, img_title, gif_animado, descriptions, inverted, ...props}) => {
  return (
    <Container
      inverted={inverted}
      {...props}
    > 
      <div className="gif_animado">
        <h1>
          {img_title}
        </h1>

        <img src={gif_animado} alt="gif_animado"/>
      </div>

      <div className="content">
        <h1>
          {title}
        </h1>

        <p>
          {descriptions.map(description => description)}
        </p>
      </div>
    </Container>
  )
}

export default Learn;
