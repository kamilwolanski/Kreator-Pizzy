import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSummary = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    backdrop-filter: ${({ blured }) => blured && 'blur(4px)'};
    pointer-events: none;
  }
`;

export const StyledSummaryTittle = styled.h2`
  padding: 10px 0 50px;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.navyBlue;
  }};
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xl;
    }};
  }
`;

export const StyledSummaryContainer = styled.div`
  width: 80%;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 2px solid white;
  border-radius: 10px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const PopUp = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  text-align: center;
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  z-index: 3;
`;

export const PopUpTitle = styled.p`
  margin: 30px 0;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xxl;
    }};
  }
`;

export const StyledWrapper = styled.div`
  padding: 25px;
`;

export const PopUpText = styled.p`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
`;

export const TotalAmount = styled.h2`
  padding: 20px;

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
  @media (max-width: 520px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
`;
