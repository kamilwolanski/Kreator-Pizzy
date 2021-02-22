import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Ul } from '../../components/organisms/PizzasList/PizzasList.style';
import {
  StyledSummary,
  StyledSummaryTittle,
  StyledSummaryContainer,
  StyledButtonsContainer,
  PopUp,
  PopUpTitle,
  StyledWrapper,
  PopUpText,
} from './Summary.style';
import { useHistory } from 'react-router-dom';
import { resetIngredients } from '../../actions/appActions';
import StyledButton from '../../components/atoms/StyledButton.style';
import BasketItem from '../../components/organisms/BasketItem/BasketItem';
import bakeImg from '../../assets/backgrounds/bake.jpg';
import BackToStart from '../../components/atoms/BackToStart';

const Summary = ({
  shoppingBasket,
  totalAmount,
  resetIngredients,
  mainBasket,
}) => {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

  const [isPopUp, setIsPopUp] = useState(false);

  useEffect(() => {
    if (isPopUp) {
      const id = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      if (minutes === 0 && seconds === 0) {
        clearInterval(id);
      }
      if (seconds < 0) {
        setSeconds(59);
        setMinutes((prev) => prev - 1);
      }
      return () => clearInterval(id);
    }
  }, [minutes, seconds, isPopUp]);

  const history = useHistory();

  const handleOnClick = (currentLocation) => {
    resetIngredients();
    const location = {
      pathname: (currentLocation.pathname = '/order'),
    };

    history.push(location);
  };

  const showPopUp = () => {
    setIsPopUp(true);
  };
  return (
    <>
      <StyledSummary img={bakeImg} blured={isPopUp}>
        {!isPopUp && <StyledSummaryTittle>podsumowanie</StyledSummaryTittle>}
        {!isPopUp && (
          <StyledSummaryContainer>
            <Ul>
              {mainBasket.map((basketItem) => (
                <BasketItem
                  key={basketItem.id}
                  {...basketItem}
                  totalAmount={totalAmount}
                />
              ))}
            </Ul>
            <h2 style={{ padding: '20px' }}>Łącznie: {totalAmount} zł</h2>
          </StyledSummaryContainer>
        )}
        {!isPopUp && (
          <StyledButtonsContainer>
            <StyledButton isWidth extraPadding onClick={handleOnClick}>
              Dodaj kolejną pizze
            </StyledButton>
            <StyledButton isWidth extraPadding onClick={showPopUp}>
              złóż zamówienie
            </StyledButton>
          </StyledButtonsContainer>
        )}
      </StyledSummary>
      {isPopUp && (
        <PopUp>
          <StyledWrapper>
            <PopUpTitle>dziękujemy!</PopUpTitle>
            <PopUpText>
              Twoje zamówienie powinno do Ciebie dotrzeć za:{' '}
              {minutes < 10
                ? '0' + minutes + 'min' + ' '
                : minutes + 'min' + ' '}
              {seconds < 10
                ? '0' + seconds + 'sec' + ' '
                : seconds + 'sec' + ' '}
            </PopUpText>
            <div style={{ margin: '45px' }}>
              <BackToStart border="black" color="black" />
            </div>
          </StyledWrapper>
        </PopUp>
      )}
    </>
  );
};

const mapDispatchToProps = {
  resetIngredients,
};

const mapStateToProps = ({ orders }) => ({
  shoppingBasket: orders.shoppingBasket,
  mainBasket: orders.mainBasket,
  totalAmount: orders.totalAmount,
});

const SummaryConsumer = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default SummaryConsumer;
