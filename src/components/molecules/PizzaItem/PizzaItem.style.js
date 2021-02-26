import styled from 'styled-components';

export const StyledPizzaItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 370px;
  width: 290px;
  margin: 20px;
  padding: 5px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.75)};
  transition: opacity 0.15s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  @media (min-width: 1600px) {
    height: 480px;
    width: 380px;
  }
  @media (max-width: 1000px) {
    height: 340px;
    width: 260px;
  }
  @media (max-width: 860px) {
    margin: 10px;
    height: initial;
    width: 80vw;
  }

  :hover {
    opacity: ${({ isActive }) => !isActive && '1'};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #313942;

  @media (max-width: 860px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

export const PizzaName = styled.p`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.ml;
  }};
  color: ${({ theme: { colors } }) => {
    return colors.black;
  }};
  margin: 10px 0;

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.l;
    }};
  }
  @media (max-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
`;

export const PizzaDetails = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
  @media (max-width: 860px) {
    width: 100%;
    margin: 0 20px;
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
  @media (max-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.sm;
    }};
  }
`;

export const PizzaSize = styled.li`
  display: flex;
  justify-content: space-between;

  @media (max-width: 860px) {
    width: 100%;
  }
  @media (max-width: 445px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export const PizzaPrice = styled(PizzaSize)``;
export const PizzaCapacity = styled(PizzaSize)``;
export const PizzaImg = styled.img`
  height: ${({ width }) => width + 'px'};
  width: ${({ width }) => width + 'px'};
  margin: 15px 0;
`;

export const PizzaNameAndImg = styled.div``;
