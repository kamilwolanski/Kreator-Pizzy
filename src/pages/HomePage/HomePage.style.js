import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Header = styled.header`
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export const Welcome = styled.div`
  position: absolute;
  top: 35%;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 3;
  @media (max-width: 1000px) {
    left: 50%;
    top: 10%;
    width: 70%;
    transform: translateX(-50%);
  }
  @media (max-width: 820px) {
    left: 50%;
    top: 10%;
    width: 75%;
    transform: translateX(-50%);
  }
  @media (max-width: 500px) {
    top: 15%;
  }
  @media (max-width: 400px) {
    top: 17%;
    width: 100%;
  }
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.xl;
  }};
  font-weight: bold;
  color: ${({ theme: { colors } }) => {
    return colors.navyBlue;
  }};
  text-align: center;
  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xxl;
    }};
  }
  @media (max-width: 1000px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xl;
    }};
  }
  @media (max-width: 655px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
  @media (max-width: 500px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.ml;
    }};
  }
`;

export const P = styled(H1)`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
  padding: 15px;
  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xl;
    }};
  }
`;

export const StyledButton = styled(Button)`
  padding: 16px 45px !important;
  margin-top: 20px !important;
`;
