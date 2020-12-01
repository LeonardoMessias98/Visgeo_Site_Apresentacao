import styled from 'styled-components';

export const Container = styled.div`
  h1,h2, p, span {
    color: #FFFFFF;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 900px;

  .marketing {
    text-align: center;

    h1 {
      margin: 10px 0;
      font-size: 35px;
    }

    span {
      font-size: 20px;
    }
  }

  .advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    svg {
      color: white;
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }

    section {
      width: 200px;
      text-align: center;
      margin: 20px;
    }

    @keyframes breath {
    0% {
      width: 80px;
      height: 80px;
    }

    50% {
      width: 100px;
      height: 100px;
    }

    100% {
      width: 80px;
      height: 80px;
    }
  }
  }
  
`;