import styled from 'styled-components';

export const OrderSection = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(3, 3, 2, 0.4209033955379027) 0%,
      rgba(0, 0, 0, 0.4749650201877626) 100%,
      rgba(60, 60, 29, 0.4105392498796393) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
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
