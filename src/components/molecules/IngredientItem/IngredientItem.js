import { useRef } from 'react';
import { connect } from 'react-redux';
import { FaWeightHanging } from 'react-icons/fa';
import {
  StyledIngredientItem,
  IngredientImg,
  IngredientName,
  WrapperIngredientItem,
  Side,
  AddAndSubtract,
  IngredientAmount,
  IngredientPrice,
  Plus,
  Minus,
  StyledToggleBtn,
  IngredientWeight,
  IngredientPriceAndWeight,
} from './IngredientItem.style';
import {
  toggleAmount,
  addIngredientsToBasket,
  handleAmount,
  totalPrice,
} from '../../../actions/appActions';

const IngredientItem = ({
  id,
  name,
  price,
  img,
  amount,
  isToMuch,
  weight,
  toggleAmount,
  addIngredientsToBasket,
  handleAmount,
  pizzaIngredients,
  shoppingBasket,
  totalPrice,
}) => {
  const inputRef = useRef();

  const handleOnClick = (id, toggle) => {
    (amount > 0 || toggle === 'inc') && toggleAmount(id, toggle);
    addIngredientsToBasket();
    totalPrice();
  };

  const checkAmount = (dodawanyElement, value) => {
    if (
      dodawanyElement.weight * value >
        shoppingBasket.maxWeight - shoppingBasket.weight ||
      dodawanyElement.weight * value > shoppingBasket.maxWeight
    ) {
      return (
        (shoppingBasket.maxWeight - shoppingBasket.weight) /
          dodawanyElement.weight +
        amount
      ).toFixed();
    }
    return value;
  };
  const handleOnChange = (id, e) => {
    let { value } = e.target;
    if (value < 0) {
      return;
    }
    const dodawanyElement = pizzaIngredients.find(
      (ingredient) => ingredient.id === id
    );
    console.log(dodawanyElement);
    console.log(value);
    value = checkAmount(dodawanyElement, value);
    handleAmount(id, Number(value));
    addIngredientsToBasket();
    totalPrice();
  };

  return (
    <StyledIngredientItem>
      <WrapperIngredientItem>
        <Side>
          <IngredientImg src={img} />
          <IngredientName>{name}</IngredientName>
        </Side>
        {isToMuch && (
          <p style={{ alignSelf: 'flex-end', fontSize: '12px', color: 'red' }}>
            Wykorzystano limit wagi dla tego składnika
          </p>
        )}
        <Side>
          <AddAndSubtract>
            <StyledToggleBtn onClick={() => handleOnClick(id, 'dec')}>
              <Minus />
            </StyledToggleBtn>
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>/</span>
            <StyledToggleBtn
              disabled={isToMuch}
              onClick={() => handleOnClick(id, 'inc')}
            >
              <Plus red={isToMuch ? 1 : 0} />
            </StyledToggleBtn>
          </AddAndSubtract>
          <IngredientAmount
            type="number"
            disabled={isToMuch}
            value={amount === 0 ? '' : amount}
            placeholder="0"
            min="0"
            name={name}
            ref={inputRef}
            onFocus={() => (inputRef.current.placeholder = '')}
            onBlur={() => (inputRef.current.placeholder = amount)}
            onChange={(e) => handleOnChange(id, e)}
          ></IngredientAmount>
          <IngredientPriceAndWeight>
            <IngredientPrice>{price} zł/szt</IngredientPrice>
            <IngredientWeight>
              {weight} <FaWeightHanging />
            </IngredientWeight>
          </IngredientPriceAndWeight>
        </Side>
      </WrapperIngredientItem>
    </StyledIngredientItem>
  );
};

const mapStateToProps = ({ orders }) => ({
  pizzaIngredients: orders.pizzaIngredients,
  shoppingBasket: orders.shoppingBasket[orders.shoppingBasket.length - 1],
});

const mapDispatchToProps = {
  toggleAmount,
  addIngredientsToBasket,
  handleAmount,
  totalPrice,
};

const IngredientItemConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientItem);

export default IngredientItemConsumer;
