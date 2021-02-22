import styled from 'styled-components';

export const StyledBasketItem = styled.li`
  margin: 10px;
  padding: 20px 20px 0 20px;
`;

export const PizzaSizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  font-weight: 700;
`;

export const StyledBasketItemWrapper = styled.div`
  position: relative;
  padding: 15px;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme: { colors } }) => {
      return colors.grey;
    }};
  }
`;

export const TotalPrice = styled.span`
  display: block;
  margin: 10px 0;
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
  font-weight: 700;
  text-align: right;
`;

// export const PizzaSize = styled.p``;
