import styled from 'styled-components';
import { motion } from 'framer-motion';
export const H2 = styled.h2`
  margin: 130px 0 30px 0;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.navyBlue;
  }};
  text-align: center;
  text-transform: uppercase;
  z-index: 3;
  @media (min-width: 1600px) {
    padding-top: 100px;
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xl;
    }};
  }
  @media (max-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
  @media (max-width: 445px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
`;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Ul = styled(motion.ul).attrs(() => ({
  key: 'modal',
  initial: 'hidden',
  animate: 'visible',
  variants,
}))`
  display: ${({ flex }) => flex && 'flex'};
  width: 100%;
  margin-left: ${({ marginLeft }) => marginLeft && '10px'};
  justify-content: center;
  align-items: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
`;

export const UlPizzaList = styled(Ul)`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
