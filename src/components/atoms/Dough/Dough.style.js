import styled from 'styled-components';
import { ReactComponent as DoughSvg } from '../../../assets/backgrounds/ciasto.svg';

export const DoughWrapper = styled.div`
  position: relative;
  right: -300px;
  top: -200px;
  z-index: 0;
`;

export const DoughItem = styled(DoughSvg)`
  width: 700px;
  height: auto;
  position: absolute;
  right: 0;

  @media (min-width: 1600px) {
    transform: scale(1.5);
  }
  @media (max-width: 820px) {
    width: 600px;
  }
  @media (max-width: 580px) {
    width: 500px;
  }
`;
