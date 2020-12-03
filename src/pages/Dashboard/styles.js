import styled from 'styled-components';

import Background from '../../assets/VisGeoBGSite.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, #091a1975, #091a1975), url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`