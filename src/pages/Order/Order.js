import { OrderSection } from './Order.style';
import Nav from '../../components/organisms/Nav/Nav';
import Content from '../../components/templates/Content/Content';
import compose_pizza from '../../assets/backgrounds/compose_pizza.jpg';
import stol from '../../assets/backgrounds/stol.jpg';
import stol2 from '../../assets/backgrounds/stol2.jpg';
import stol3 from '../../assets/backgrounds/stol3.jpg';
import StyledButton from '../../components/atoms/StyledButton.style';
import { ButtonsContainer, StyledCenter } from './Order.style';
import BackButton from '../../components/atoms/BackButton';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {
  resetIngredients,
  addPizza,
  addPizzaToMain,
} from '../../actions/appActions';

const Order = ({
  resetIngredients,
  addPizza,
  addPizzaToMain,
  shoppingBasket,
}) => {
  const history = useHistory();
  const currentLocation = useLocation();

  const handleOnClick = (currentLocation) => {
    if (currentLocation.pathname === '/order/ingredients') {
      addPizzaToMain();
    }
    const location = {
      pathname:
        currentLocation.pathname === '/order'
          ? '/order/ingredients'
          : '/summary',
    };

    history.push(location);
  };

  const handleImg = () => {
    if (currentLocation.pathname === '/order/ingredients') {
      return stol3;
    } else {
      return compose_pizza;
    }
  };
  return (
    <>
      <Nav />
      <OrderSection img={handleImg}>
        <StyledCenter>
          <Content />
          <ButtonsContainer>
            <BackButton />
            <StyledButton
              margin
              extraPadding
              disabled={!shoppingBasket.length}
              onClick={() => handleOnClick(currentLocation)}
            >
              dalej
            </StyledButton>
          </ButtonsContainer>
        </StyledCenter>
      </OrderSection>
    </>
  );
};

const mapStateToProps = ({ orders }) => ({
  shoppingBasket: orders.shoppingBasket,
});

const mapDispatchToProps = {
  resetIngredients,
  addPizza,
  addPizzaToMain,
};

const OrderConsumer = connect(mapStateToProps, mapDispatchToProps)(Order);

export default OrderConsumer;
