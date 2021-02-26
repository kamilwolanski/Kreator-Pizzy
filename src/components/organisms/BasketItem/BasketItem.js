import { Ul } from '../PizzasList/PizzasList.style';
import {
  StyledBasketItem,
  PizzaSizeContainer,
  StyledBasketItemWrapper,
  TotalPrice,
} from './BasketItem.style';
import IngredientSummaryItem from '../../molecules/IngredientSummaryItem/IngredientSummaryItem';

const BasketItem = ({ name, ingredients, price, totalAmount, totalPrice }) => {
  return (
    <StyledBasketItem>
      <StyledBasketItemWrapper>
        <PizzaSizeContainer>
          <p>Rozmiar: {name}</p>
          <p>{price.toFixed(2)} zł</p>
        </PizzaSizeContainer>
        <Ul marginLeft>
          {ingredients.map((ingredient) => (
            <IngredientSummaryItem key={ingredient.id} {...ingredient} />
          ))}
        </Ul>
      </StyledBasketItemWrapper>

      <TotalPrice>{totalPrice.toFixed(2)} zł</TotalPrice>
    </StyledBasketItem>
  );
};

export default BasketItem;
