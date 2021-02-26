import StyledButton from './StyledButton.style';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAll, resetMainBasket } from '../../actions/appActions';

const BackToStart = ({ resetAll, resetMainBasket, border, color }) => {
  let history = useHistory();

  const handleReset = () => {
    resetAll();
    resetMainBasket();
    history.push('/');
  };
  return (
    <StyledButton
      borderBlack={border}
      colorBlack={color}
      extraPadding
      fontM
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
