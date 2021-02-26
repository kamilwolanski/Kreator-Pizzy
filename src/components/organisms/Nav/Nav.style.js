import styled from 'styled-components';
import { motion } from 'framer-motion';

const variantsNav = {
  visible: {
    opacity: 1,
    transition: { duration: 1.4 },
    y: 0,
    type: 'spring',
  },
  hidden: { opacity: 0, y: -200 },
  exit: { top: -400, transition: { duration: 0.6 } },
};
export const StyledNav = styled(motion.nav).attrs(() => ({
  key: 'modal',
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  variants: variantsNav,
}))`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1.25rem 2rem;
  /* background-color: #313942; */
  background-color: ${({ isBlackNav }) =>
    isBlackNav ? 'rgba(255, 253, 227, 1)' : 'transparent'};
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  transition: background-color 0.3s;
  z-index: 6;
`;

export const NavCenter = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.span``;

export const NavData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 27px;

  @media (min-width: 1600px) {
    font-size: 36px;
  }
`;

export const Capacity = styled.span`
  display: flex;
  align-items: center;
`;
