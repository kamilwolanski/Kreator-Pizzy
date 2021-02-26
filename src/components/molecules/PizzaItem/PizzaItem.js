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
  PizzaNameAndImg,
} from './PizzaItem.style';
import {
  setActive,
  addPizza,
  getTotalAmount,
  totalPrice,
} from '../../../actions/appActions';
import { useEffect, useState } from 'react';

const PizzaItem = ({
  id,
  name,
  price,
  size,
  img,
  isActive,
  maxWeight,
  width,
  setActive,
  addPizza,
  getTotalAmount,
  totalPrice,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowWidth);

  const handleOnClick = (id, isActive) => {
    setActive(id);
    addPizza(id);
    totalPrice();
    getTotalAmount();
  };

  const handlePizzaImg = () => {
    if (windowWidth > 1600) {
      return width + 80;
    }
    if (windowWidth <= 1000 && windowWidth > 860) {
      return width - 40;
    }
    if (windowWidth < 860 && windowWidth > 860) {
      return width;
    }
    if (windowWidth <= 600) {
      return width - 40;
    } else {
      return width;
    }
  };
  return (
    <StyledPizzaItem
      isActive={isActive}
      onClick={() => handleOnClick(id, isActive)}
    >
      <Wrapper>
        <PizzaNameAndImg>
          <PizzaName>{name}</PizzaName>
          <PizzaImg src={img} width={handlePizzaImg()} alt="" />
        </PizzaNameAndImg>

        <PizzaDetails>
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
