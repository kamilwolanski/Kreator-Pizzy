import styled from 'styled-components';

export const OrderSection = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  min-height: 100vh;
  /* background-color: #edece9;
   */
  background-image: linear-gradient(
    to left top,
    #edece9,
    #f3f0ef,
    #f7f5f5,
    #fbfafb,
    #ffffff
  );
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
