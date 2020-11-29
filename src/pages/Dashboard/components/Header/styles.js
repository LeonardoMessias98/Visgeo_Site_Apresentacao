import styled from 'styled-components';

import bgHeader from '../../../../assets/visgeo_wallpaper.png';

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
    background: #121212;
    color: #FFFFFF;

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
    background: url(${bgHeader} ) no-repeat, linear-gradient(45deg, rgb(213 239 255),rgb(190 242 255),rgb(198 255 179));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: contain;
    animation: colors 37s ease infinite;

    h1, h2 {
      font-family: roboto, sans-serif;
      color: #FFFFFF;
      text-shadow: 2px 2px 3px black;
    }

    h1 {
      font-size: 40px;
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
`