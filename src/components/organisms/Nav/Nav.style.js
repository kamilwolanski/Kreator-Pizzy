import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1.25rem 2rem;
  background-color: #313942;
  /* background-color: ${({ isBlackNav }) =>
    isBlackNav ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)'}; */
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  transition: background-color 0.3s;
  z-index: 1;
`;

export const NavCenter = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.span`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
`;

export const NavData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
`;

export const Capacity = styled.span`
  display: flex;
  align-items: center;
`;
