import StyledButton from './StyledButton.style';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAll, resetMainBasket } from '../../actions/appActions';

const BackToStart = ({ resetAll, resetMainBasket, border, color }) => {
  console.log(border, color);
  const handleReset = () => {
    resetAll();
    resetMainBasket();
  };
  return (
    <StyledButton
      as={NavLink}
      to="/"
      borderBlack={border}
      colorBlack={color}
      onClick={handleReset}
    >
      wróc na start
    </StyledButton>
  );
};

const mapDispatchToProps = {
  resetAll,
  resetMainBasket,
};

const BackToStartConsumer = connect(null, mapDispatchToProps)(BackToStart);
export default BackToStartConsumer;
