import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;

  ${props => props.bgEnable && css `
    background: #242424;
  `}
    
  .content {
    width: 100%;
    height: 100%;
    background-size: cover;
    color: #FFF;
    max-width: 1800px;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, p {
      font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 600;
      margin: 10px;
    }

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }
  }
`;
