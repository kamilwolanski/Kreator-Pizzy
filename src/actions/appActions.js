export const ADD_PIZZA = 'ADD_PIZZA';
export const IS_ACTIVE = 'IS_ACTIVE';
export const TOTAL_AMOUNT = 'TOTAL_AMOUNT';
export const ADD_INGREDIENT = 'ADD_INGREDIEN';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
export const ADD_INGREDIENTS_TO_BASKET = 'ADD_INGREDIENTS_TO_BASKET';
export const RESET_INGREDIENTS = 'RESET_INGREDIENTS';
export const RESET_ALL = 'RESET_ALL';
export const HANDLE_AMOUNT = 'HANDLE_AMOUNT';
export const CHECK_TO_MUCH = 'CHECK_TO_MUCH';
export const ADD_PIZZA_TO_MAIN = 'ADD_PIZZA_TO_MAIN';
export const TOTAL_PRICE = 'TOTAL_PRICE';
export const RESET_MAIN_BASKET = 'RESET_MAIN_BASKET';

export const addPizza = (id, isActive) => ({
  type: ADD_PIZZA,
  payload: {
    id,
    isActive: isActive,
  },
});

export const setActive = (id) => ({
  type: IS_ACTIVE,
  payload: {
    id,
  },
});

export const getTotalAmount = () => ({
  type: TOTAL_AMOUNT,
});

// export const addIngredient = (id) => ({
//   type: ADD_INGREDIENT,
//   payload: {
//     id,
//   },
// });

export const toggleAmount = (id, toggle) => ({
  type: TOGGLE_AMOUNT,
  payload: {
    id,
    toggle,
  },
});

export const addIngredientsToBasket = () => ({
  type: ADD_INGREDIENTS_TO_BASKET,
});

export const resetIngredients = () => ({
  type: RESET_INGREDIENTS,
});
export const resetAll = () => ({
  type: RESET_ALL,
});

export const handleAmount = (id, value) => ({
  type: HANDLE_AMOUNT,
  payload: {
    id,
    value,
  },
});

export const checkToMuch = () => ({
  type: CHECK_TO_MUCH,
});

export const addPizzaToMain = () => ({
  type: ADD_PIZZA_TO_MAIN,
});

export const totalPrice = () => ({
  type: TOTAL_PRICE,
});

export const resetMainBasket = () => ({
  type: RESET_MAIN_BASKET,
})
