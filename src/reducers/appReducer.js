import {
  ADD_PIZZA,
  IS_ACTIVE,
  TOTAL_AMOUNT,
  TOGGLE_AMOUNT,
  ADD_INGREDIENTS_TO_BASKET,
  RESET_INGREDIENTS,
  RESET_ALL,
  HANDLE_AMOUNT,
  CHECK_TO_MUCH,
  ADD_PIZZA_TO_MAIN,
  TOTAL_PRICE,
  RESET_MAIN_BASKET,
} from '../actions/appActions';
import pizzaItems from '../data/pizzaItems';
import pizzaIngredients from '../data/pizzaIngredients';

const initialStore = {
  pizzaItems: pizzaItems,
  totalAmount: 0,
  shoppingBasket: [],
  pizzaIngredients: pizzaIngredients,
  mainBasket: [],
};

export const appReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        shoppingBasket: state.pizzaItems.filter(
          (item) => item.id === action.payload.id
        ),
      };
    case IS_ACTIVE:
      return {
        ...state,
        pizzaItems: state.pizzaItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isActive: true };
          } else {
            return { ...item, isActive: false };
          }
        }),
      };
    case TOTAL_AMOUNT:
      let totalPrice = 0;
      if (state.shoppingBasket.length === 0) {
        totalPrice = 0;
      } else {
        totalPrice = state.shoppingBasket[0].totalPrice;
      }
      let { totalAmount } = state.mainBasket.reduce(
        (cartTotal, cartItem) => {
          const { price, ingredients } = cartItem;

          let sum = 0;

          ingredients.forEach((item) => {
            sum += item.price * item.amount;
          });

          cartTotal.totalAmount += price + sum;

          return cartTotal;
        },
        {
          totalAmount: 0,
        }
      );
      totalAmount = parseFloat(totalAmount + totalPrice).toFixed(2);
      return { ...state, totalAmount };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        pizzaIngredients: state.pizzaIngredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) {
            if (action.payload.toggle === 'inc') {
              return (ingredient = {
                ...ingredient,
                amount: ingredient.amount + 1,
              });
            }
            if (action.payload.toggle === 'dec') {
              return (ingredient = {
                ...ingredient,
                amount: ingredient.amount - 1,
              });
            }
          }
          return ingredient;
        }),
      };
    case ADD_INGREDIENTS_TO_BASKET:
      let ingredientsAboveZero = state.pizzaIngredients.filter(
        (item) => item.amount > 0
      );
      const getSumOfWeight = () => {
        if (ingredientsAboveZero) {
          const weightsOfIncredients = ingredientsAboveZero.map(
            (ingredient) => ingredient.amount * ingredient.weight
          );
          return weightsOfIncredients.reduce((total, current) => {
            return total + current;
          }, 0);
        }
      };
      const sumOfWeights = getSumOfWeight();

      return {
        ...state,
        shoppingBasket: state.shoppingBasket.map((item, i) => {
          if (i === state.shoppingBasket.length - 1) {
            return {
              ...item,
              ingredients: ingredientsAboveZero,
              weight: sumOfWeights,
            };
          } else {
            return item;
          }
        }),
      };
    case RESET_INGREDIENTS:
      return {
        ...state,
        pizzaIngredients: state.pizzaIngredients.map((ingredient) => {
          return {
            ...ingredient,
            amount: (ingredient.amount = 0),
            isToMuch: (ingredient.isToMuch = false),
          };
        }),
        shoppingBasket: state.shoppingBasket.map((item, i) => {
          if (i === state.shoppingBasket.length - 1) {
            return { ...item, ingredients: [], weight: 0 };
          } else {
            return item;
          }
        }),
      };
    case RESET_ALL:
      return {
        ...state,
        shoppingBasket: [],
        pizzaItems: state.pizzaItems.map((pizzaItem) => {
          return { ...pizzaItem, isActive: (pizzaItem.isActive = false) };
        }),
        pizzaIngredients: state.pizzaIngredients.map((ingredient) => {
          return { ...ingredient, amount: (ingredient.amount = 0) };
        }),
      };
    case RESET_MAIN_BASKET:
      return { ...state, mainBasket: [] };
    case HANDLE_AMOUNT:
      return {
        ...state,
        pizzaIngredients: state.pizzaIngredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) {
            return { ...ingredient, amount: action.payload.value };
          } else {
            return ingredient;
          }
        }),
      };
    case CHECK_TO_MUCH:
      return {
        ...state,
        pizzaIngredients: [
          ...state.pizzaIngredients.map((ingredient) => {
            if (state.shoppingBasket.length > 0) {
              return {
                ...ingredient,
                isToMuch:
                  state.shoppingBasket[state.shoppingBasket.length - 1]
                    .maxWeight <
                  state.shoppingBasket[state.shoppingBasket.length - 1].weight +
                    ingredient.weight
                    ? true
                    : false,
              };
            } else {
              return ingredient;
            }
          }),
        ],
      };
    case ADD_PIZZA_TO_MAIN:
      return {
        ...state,
        mainBasket: [
          ...state.mainBasket,
          ...state.shoppingBasket.map((item) => item),
        ],
      };
    case TOTAL_PRICE:
      return {
        ...state,
        shoppingBasket: state.shoppingBasket.map((item, index) => {
          if (index === 0) {
            let sum = 0;
            item.ingredients.forEach((item) => {
              sum += item.price * item.amount;
            });
            return {
              ...item,
              totalPrice: item.price + sum,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};
