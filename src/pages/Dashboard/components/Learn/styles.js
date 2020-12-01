import styled from 'styled-components';

import background_app from '../../../../assets/background.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
  background: linear-gradient(to top, #0b1d1c 10%, #0d2321 35%, #0f2321);
  
  .content {
    width: 100%;
    height: 100%;
    background-size: cover;
    max-width: 1800px;
  }
`;
