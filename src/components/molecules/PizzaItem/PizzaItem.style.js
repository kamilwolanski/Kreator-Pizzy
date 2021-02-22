import styled from 'styled-components';

export const StyledPizzaItem = styled.li`
  position: relative;
  margin: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.75)};
  transition: opacity 0.15s;
  cursor: pointer;

  :hover {
    opacity: ${({ isActive }) => !isActive && '1'};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const PizzaName = styled.p`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.m;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
`;

export const PizzaDetails = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PizzaSize = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const PizzaPrice = styled(PizzaSize)``;
export const PizzaCapacity = styled(PizzaSize)``;
export const PizzaImg = styled.img`
  height: 190px;
  width: 190px;
  color: white;
  /* border-radius: 50%; */
  /* object-fit: cover; */
`;
