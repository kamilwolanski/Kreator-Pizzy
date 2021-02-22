import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const StyledIngredientItem = styled.li`
  margin: 10px;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border: 2px solid white;
  border-radius: 10px;
`;

export const WrapperIngredientItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const IngredientImg = styled.img`
  width: 90px;
  height: 90px;
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
`;

export const IngredientName = styled.p`
  padding: 0px 20px;
`;

export const AddAndSubtract = styled.div`
  margin: 0 10px;
`;

export const IngredientAmount = styled.input`
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
`;

export const IngredientPriceAndWeight = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { colors } }) => {
    return colors.grey;
  }};
`;

export const IngredientPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const IngredientWeight = styled(IngredientPrice)`
  font-size: ${({ theme: { fontSize } }) => {
    return fontSize.sm;
  }};
  text-align: center;
`;

export const Plus = styled(FaPlus)`
  color: ${({ red }) => red && 'red'};
  cursor: pointer;
`;

export const Minus = styled(FaMinus)`
  cursor: pointer;
`;

export const StyledToggleBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  outline: none;
`;
