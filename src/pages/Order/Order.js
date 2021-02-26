import { OrderSection } from './Order.style';
import Nav from '../../components/organisms/Nav/Nav';
import Content from '../../components/templates/Content/Content';
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
import RollingPin from '../../components/atoms/RollingPin/RollingPin';
import Grater from '../../components/atoms/Grater/Grater';
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

  return (
    <>
      <Nav />
      <OrderSection>
        <StyledCenter>
          <Content />
          <ButtonsContainer>
            <BackButton />
            <StyledButton
              margin
              extraPadding
              fontM
              disabled={!shoppingBasket.length}
              onClick={() => handleOnClick(currentLocation)}
            >
              dalej
            </StyledButton>
          </ButtonsContainer>
        </StyledCenter>
      </OrderSection>
      {currentLocation.pathname === '/order' && (
        <RollingPin visibleY="70" hiddenY="140" exitY="70" exitX="-200" />
      )}
      {currentLocation.pathname === '/order/ingredients' && (
        <Grater
          visibleX="0vw"
          hiddenX="-100vw"
          visibleY="30vh"
          hiddenY="-30vh"
        />
      )}
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
