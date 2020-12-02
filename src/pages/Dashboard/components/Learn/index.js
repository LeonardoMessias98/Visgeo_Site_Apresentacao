import React from 'react'

import { Container } from './styles';

const Learn = ({title, descriptions, bgEnable, ...props}) => {
  return (
    <Container
      bgEnable={bgEnable}
      {...props}
    >
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
