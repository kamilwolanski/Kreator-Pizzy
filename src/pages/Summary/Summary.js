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
  TotalAmount,
} from './Summary.style';
import { useHistory } from 'react-router-dom';
import { resetIngredients } from '../../actions/appActions';
import StyledButton from '../../components/atoms/StyledButton.style';
import BasketItem from '../../components/organisms/BasketItem/BasketItem';
import BackToStart from '../../components/atoms/BackToStart';
import Girl from '../../components/atoms/Girl/Girl';

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
      <StyledSummary
        blured={isPopUp}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
            <TotalAmount>Łącznie: {totalAmount} zł</TotalAmount>
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
        <PopUp initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
              <BackToStart />
            </div>
          </StyledWrapper>
        </PopUp>
      )}
      <Girl visibleX="0" hiddenX="-200" visibleY="-30" hiddenY="-30" />
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
