import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OrderSection = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const buttonsContainerVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};
export const ButtonsContainer = styled(motion.div).attrs((props) => ({
  initial: 'hidden',
  animate: 'visible',
  variants: buttonsContainerVariants,
}))`
  display: flex;
  justify-content: center;
  @media (min-width: 1600px) {
    margin-top: 40px;
  }
`;

export const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 200px; */

  @media (min-width: 1600px) {
    padding-bottom: 150px;
  }
`;
