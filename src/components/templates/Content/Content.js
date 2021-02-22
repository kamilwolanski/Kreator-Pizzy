import { Route, Switch } from 'react-router-dom';
import PizzasList from '../../organisms/PizzasList/PizzasList';
import IngredientsList from '../../organisms/IngredientsList/IngredientsList';
// import Summary from '../../organisms/Summary/Summary';

const Content = () => {
  return (
    <Switch>
      <Route path="/order" exact component={PizzasList} />
      <Route path="/order/ingredients" component={IngredientsList} />
      {/* <Route path="/order/summary" component={Summary} /> */}
    </Switch>
  );
};

export default Content;
