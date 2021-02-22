import { connect } from 'react-redux';
import {
  StyledPizzaItem,
  Wrapper,
  PizzaName,
  PizzaDetails,
  PizzaPrice,
  PizzaSize,
  PizzaImg,
  PizzaCapacity,
} from './PizzaItem.style';
import {
  setActive,
  addPizza,
  getTotalAmount,
  totalPrice,
} from '../../../actions/appActions';

const PizzaItem = ({
  id,
  name,
  price,
  size,
  img,
  isActive,
  maxWeight,
  setActive,
  addPizza,
  getTotalAmount,
  totalPrice,
}) => {
  // console.log(isActive);

  const handleOnClick = (id, isActive) => {
    setActive(id);
    addPizza(id);
    totalPrice();
    getTotalAmount();
  };
  return (
    <StyledPizzaItem
      isActive={isActive}
      onClick={() => handleOnClick(id, isActive)}
    >
      <Wrapper>
        <PizzaName>{name}</PizzaName>
        <PizzaDetails>
          <PizzaImg src={img} alt="" />
          <PizzaSize>
            <span>Rozmiar:</span>
            <span>{size} &#8960;</span>
          </PizzaSize>
          <PizzaPrice>
            <span>Cena:</span>
            <span>{price.toFixed(2)} PLN</span>
          </PizzaPrice>
          <PizzaCapacity>
            <span>Udźwig:</span>
            <span>{maxWeight}</span>
          </PizzaCapacity>
        </PizzaDetails>
      </Wrapper>
    </StyledPizzaItem>
  );
};

const mapDispatchToProps = {
  setActive,
  addPizza,
  getTotalAmount,
  totalPrice,
};

const PizzaItemConsumer = connect(null, mapDispatchToProps)(PizzaItem);

export default PizzaItemConsumer;
