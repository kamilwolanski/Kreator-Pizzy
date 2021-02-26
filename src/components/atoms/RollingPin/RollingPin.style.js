import styled from 'styled-components';
import { ReactComponent as RollingPinSvg } from '../../../assets/backgrounds/walek.svg';
import { motion } from 'framer-motion';
export const RollingPinWrapper = styled(motion.div)`
  position: absolute;
  transform: rotate(35deg);
  z-index: 1;
`;

export const RollingPinItem = styled(RollingPinSvg)`
  width: 200px;
  height: auto;
  @media (min-width: 1600px) {
    transform: scale(1.5);
  }
  @media (max-width: 1000px) {
    width: 150px;
  }
  @media (max-width: 580px) {
    width: 130px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
