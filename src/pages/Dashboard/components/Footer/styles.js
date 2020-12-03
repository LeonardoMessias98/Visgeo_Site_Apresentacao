import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;

  footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      cursor: pointer;

      font-size: 24px;
      font-family: 'Roboto';
      font-weight: 600;

      span {
        color: white;
      }
    }

    img {
      width: 75px;
      height: 75px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid white;
      margin-bottom: 10px;
    }
  }
`;
