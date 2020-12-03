import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 600px;
  
  header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0,0,0, 0.6);
    backdrop-filter: blur(6px);
    color: #FFFFFF;
    z-index: 3;


    img {
      width: 80px;
      position: absolute;
      left: 10px;
    }

    button {
      background: none;
      border: none;
      color: #FFFFFF;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 18px;
    }

  }
  
  .presentation {
    height: 100%;
    width: 100%;
    background: linear-gradient(to top,#071716 5%, #0b1e1d ,#0d2120 30%,#0f2422);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: contain;

    img.logo {
      animation: breath_logo 10s ease infinite;
      width: 300px;
      position: absolute;
      z-index: 1;
    }

    img.background {
      height: 600px;
      position: absolute;
      width: 100%;
      max-width: 1200px;
    }

    h1, h2 {
      font-family: roboto, sans-serif;
      color: #FFFFFF;
      text-shadow: 2px 2px 3px black;
      z-index: 2;
    }

    h1 {
      font-size: 40px;
      text-align: center;
    }

    h2 {
      font-size: 30px;
    }

    button {
      margin-top: 50px;
      border: none;
      border-radius: 12px;
      padding: 5px 10px;
      background: #ffffff;
      color: #348c98;
      font-family: 'Roboto';
      font-weight: 500;
      cursor: pointer;
      font-size: 18px;
      z-index: 2;
      transition: .5s all;
    }

    button:hover {
      transition: .5s all;
      color: #FFFFFF;
      background: linear-gradient(45deg,rgb(93 97 250),rgb(91 175 197),rgb(116 243 138),rgb(56 195 10));
      background-size: 200% 200%;
      animation: colors 7s ease infinite;
    }
  }

    @keyframes colors {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

    @keyframes breath_logo {
    0% {
      width: 350px;
      opacity: 0.3;
    }

    50% {
      width: 450px;
      opacity: 1;
    }

    100% {
      width: 350px;
      opacity: 0.3;
    }
  }
`