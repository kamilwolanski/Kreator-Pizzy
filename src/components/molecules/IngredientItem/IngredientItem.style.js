import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const StyledIngredientItem = styled.li`
  margin: 10px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: 2px solid white;
  border-radius: 10px;
  @media (min-width: 1600px) {
    width: 1000px;
  }
`;

export const WrapperIngredientItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  @media (min-width: 1500px) {
    padding: 18px;
  }
`;

export const IngredientImg = styled.img`
  width: 90px;
  height: 90px;
  @media (min-width: 1600px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;

  @media (max-width: 600px) {
    min-width: initial;
  }
`;

export const IngredientName = styled.p`
  padding: 0px 20px;

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xm;
    }};
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const AddAndSubtract = styled.div`
  margin: 0 10px;
`;

export const IngredientAmount = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 15px;
  text-align: center;
  border: 2px solid black;
  font-weight: 700;
  /* opacity: ${({ placeholder }) => (placeholder === 0 ? 0 : 1)}; */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (min-width: 1600px) {
    width: 60px;
    height: 60px;
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.xm;
    }};
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.s;
    }};
  }
`;

export const IngredientPriceAndWeight = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { colors } }) => {
    return colors.grey;
  }};
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.sm;
  }};

  @media (min-width: 1600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.m;
    }};
  }
  @media (max-width: 600px) {
    font-size: ${({ theme: { fontSize } }) => {
      return fontSize.s;
    }};
  }
`;

export const IngredientPrice = styled.p`
  font-weight: 700;
`;

export const IngredientWeight = styled(IngredientPrice)`
  text-align: center;
`;

export const Plus = styled(FaPlus)`
  color: ${({ red }) => red && 'red'};
  cursor: pointer;
  @media (min-width: 1600px) {
    font-size: 33px;
  }
`;

export const Minus = styled(FaMinus)`
  cursor: pointer;
  @media (min-width: 1600px) {
    font-size: 33px;
  }
`;

export const StyledToggleBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline: none;
`;

export const Slash = styled.span`
  font-size: 30px;
  font-weight: bold;

  @media (min-width: 1600px) {
    font-size: 50px;
  }
`;
