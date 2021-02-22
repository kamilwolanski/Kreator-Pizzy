import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: ${({ isWidth }) => (isWidth ? '300px' : '0px')};
  margin: ${({ margin }) => (margin ? '20px' : '10px')};
  padding: ${({ extraPadding }) => (extraPadding ? '15px 30px' : '10px')};
  background-color: #313942;
  border: ${({ borderBlack }) =>
    borderBlack ? '2px solid black' : '2px solid white'};
  color: ${({ colorBlack, theme: { colors } }) => {
    return colorBlack ? colors.black : colors.white;
  }};
  text-transform: uppercase;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.sm;
  }};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  text-decoration: none;
  transition: 0.2s;
  cursor: ${({ disabled }) => !disabled && 'pointer'};

  :hover {
    background-color: ${({ disabled, theme: { colors } }) => {
      return !disabled && colors.white;
    }};
    color: ${({ disabled, theme: { colors } }) => {
      return !disabled && colors.black;
    }};
    /* border: 2px solid black; */
  }
`;

export default StyledButton;
