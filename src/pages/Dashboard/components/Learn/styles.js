import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => props.inverted 
    && css `
      flex-direction: row-reverse;
    `
  }

  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  height: 900px;

  .gif_animado {
    img {
      padding: 20px;
      width: 500px;
      height: 300px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    background-size: cover;
    color: #FFF;
    max-width: 600px;
    text-align: start;

    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, p {
      font-family: Roboto;
      font-style: normal;
      width: 100%;
      margin: 10px;
    }

    h1 {
      font-weight: 900;
      font-size: 60px;
      line-height: 82px;

      color: #FFFFFF;
    }

    p {
      font-weight: 300;
      font-size: 25px;
      line-height: 41px;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1155px) {
    .content {
      height: max-content;
    }

    flex-direction: column-reverse;
  }
`;
