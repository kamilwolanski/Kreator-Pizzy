import styled from 'styled-components';

export const StyledIngredientSummaryItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => {
    return colors.grey;
  }};
`;
