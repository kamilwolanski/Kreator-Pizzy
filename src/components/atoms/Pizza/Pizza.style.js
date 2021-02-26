import styled from 'styled-components';

export const PizzaSvgContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  z-index: 2;

  @media (min-width: 1600px) {
    right: 140px;
    bottom: 110px;
  }
  @media (max-width: 1300px) {
    height: 0;
    width: 550px;
  }
  @media (max-width: 1100px) {
    height: 0;
    width: 480px;
  }

  @media (max-width: 1000px) {
    left: 50%;
    bottom: 20px;
    height: 0;
    transform: translateX(-50%);
  }
  @media (max-width: 820px) {
    bottom: 20px;
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;
