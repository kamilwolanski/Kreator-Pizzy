import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as GraterSvg } from '../../../assets/backgrounds/tarka.svg';

export const GraterWrapper = styled(motion.div)`
  position: absolute;
  z-index: 1;
`;

export const GraterItem = styled(GraterSvg)`
  width: 250px;
  height: auto;
  @media (min-width: 1600px) {
    transform: scale(1.5);
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
