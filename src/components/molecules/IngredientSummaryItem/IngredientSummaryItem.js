import { StyledIngredientSummaryItem } from './IngredientSummaryItem.style';

const IngredientSummaryItem = ({ name, amount, price }) => {
  return (
    <>
      <StyledIngredientSummaryItem>
        <div style={{ display: 'flex' }}>
          <p>x{amount} </p>
          <p style={{ marginLeft: '5px' }}> {name}</p>
        </div>
        <p>{(amount * price).toFixed(2)} zł</p>
      </StyledIngredientSummaryItem>
    </>
  );
};

export default IngredientSummaryItem;
