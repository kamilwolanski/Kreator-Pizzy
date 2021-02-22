import { useEffect } from 'react';
import { connect } from 'react-redux';
import PizzaItem from '../../molecules/PizzaItem/PizzaItem';
import { H2, Ul } from './PizzasList.style';
import { resetAll, getTotalAmount } from '../../../actions/appActions';

const PizzasList = ({
  pizzaItems,
  resetAll,
  shoppingBasket,
  getTotalAmount,
}) => {
  useEffect(() => {
    resetAll();
  }, [resetAll]);
  useEffect(() => {
    console.log('to sie dzieje');
    getTotalAmount();
  }, [shoppingBasket, getTotalAmount]);
  const pizzaItemsComponent = pizzaItems.map((pizzaItem) => (
    <PizzaItem key={pizzaItem.id} {...pizzaItem} />
  ));
  return (
    <>
      <H2>wybierz rozmiar pizzy</H2>
      <Ul flex>{pizzaItemsComponent}</Ul>
    </>
  );
};

const mapStateToProps = ({ orders }) => ({
  pizzaItems: orders.pizzaItems,
  shoppingBasket: orders.shoppingBasket,
});

const mapDispatchToProps = {
  resetAll,
  getTotalAmount,
};

const PizzasListConsumer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzasList);

export default PizzasListConsumer;
