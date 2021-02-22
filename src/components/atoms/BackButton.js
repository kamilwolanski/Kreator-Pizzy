import StyledButton from './StyledButton.style';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetIngredients, getTotalAmount } from '../../actions/appActions';

const BackButton = ({ resetIngredients }) => {
  const history = useHistory();
  const handleOnClick = () => {
    // getTotalAmount();
    resetIngredients();
    history.goBack();
  };

  return (
    <StyledButton margin extraPadding onClick={handleOnClick}>
      Wróć
    </StyledButton>
  );
};

const mapDispatchToProps = {
  resetIngredients,
  getTotalAmount,
};

const BackButtonConsumer = connect(null, mapDispatchToProps)(BackButton);

export default BackButtonConsumer;
