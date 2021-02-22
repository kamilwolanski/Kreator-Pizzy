import styled from 'styled-components';

export const H2 = styled.h2`
  margin: 130px 0 30px 0;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.l;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.white;
  }};
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 1600px) {
    padding-top: 100px;
  }
`;

export const Ul = styled.ul`
  display: ${({ flex }) => flex && 'flex'};
  margin-left: ${({ marginLeft }) => marginLeft && '10px'};
  justify-content: center;
  align-items: center;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
`;
