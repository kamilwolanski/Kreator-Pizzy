import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Ul, H2 } from '../PizzasList/PizzasList.style';
import IngredientItem from '../../molecules/IngredientItem/IngredientItem';
import {
  checkToMuch,
  getTotalAmount,
  totalPrice,
} from '../../../actions/appActions';

const IngredientsList = ({
  pizzaIngredients,
  shoppingBasket,
  checkToMuch,
  getTotalAmount,
  totalPrice,
}) => {
  useEffect(() => {
    checkToMuch();
  }, [shoppingBasket, checkToMuch]);

  useEffect(() => {
    getTotalAmount();
  }, [getTotalAmount, pizzaIngredients, totalPrice]);

  const ingredientsListComponent = pizzaIngredients.map((ingredient) => {
    return <IngredientItem key={ingredient.id} {...ingredient} />;
  });
  return (
    <>
      <H2>Wybierz składniki do swojej pizzy</H2>
      <Ul flex column>
        {ingredientsListComponent}
      </Ul>
    </>
  );
};
const mapDispatchToProps = {
  checkToMuch,
  totalPrice,
  getTotalAmount,
};

const mapStateToProps = ({ orders }) => ({
  pizzaIngredients: orders.pizzaIngredients,
  shoppingBasket: orders.shoppingBasket[orders.shoppingBasket.length - 1],
});

const IngredientsListConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsList);

export default IngredientsListConsumer;
