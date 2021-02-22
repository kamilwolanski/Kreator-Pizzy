import styled from 'styled-components';

export const StyledSummary = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  background: linear-gradient(
      180deg,
      rgba(3, 3, 2, 0.4209033955379027) 0%,
      rgba(0, 0, 0, 0.4749650201877626) 100%,
      rgba(60, 60, 29, 0.4105392498796393) 100%
    ),
    url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  /* filter: ${({ blured }) => blured && 'blur(4px)'}; */

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    backdrop-filter: ${({ blured }) => blured && 'blur(4px)'}; /* apply the blur */
    pointer-events: none; /* make the pseudo class click-through */
  }
`;

export const StyledSummaryTittle = styled.h2`
  padding: 130px 0 50px;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  text-align: center;
  text-transform: uppercase;
`;

export const StyledSummaryContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.75);
  border: 2px solid white;
  border-radius: 10px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const PopUp = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  left: 50%;
  width: 45%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  text-align: center;
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  z-index: 3;
  /* padding: 200px; */
`;

export const PopUpTitle = styled.p`
  margin: 30px 0;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  text-transform: uppercase;
  font-weight: bold;
`;

export const StyledWrapper = styled.div`
  padding: 25px;
`;

export const PopUpText = styled.p`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
`;
