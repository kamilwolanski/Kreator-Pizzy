import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as GirlSvg } from '../../../assets/backgrounds/baba.svg';

export const GirlWrapper = styled(motion.div)``;
export const GirlItem = styled(GirlSvg)`
  width: 300px;
  height: auto;
  position: absolute;
  left: 0;
  bottom: -10px;

  @media (min-width: 1600px) {
    width: 400px;
  }

  @media (max-width: 1250px) {
    width: 250px;
  }
  @media (max-width: 1100px) {
    width: 210px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
