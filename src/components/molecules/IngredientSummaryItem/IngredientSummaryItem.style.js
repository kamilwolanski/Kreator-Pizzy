import styled from 'styled-components';

export const StyledIngredientSummaryItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => {
    return colors.grey;
  }};

  @media (min-width: 1500px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
  @media (max-width: 520px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.s;
    }};
  }
`;
