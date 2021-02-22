import smallPizza from '../assets/pizza_imgs/pizza_small.svg';
import mediumPizza from '../assets/pizza_imgs/pizza_medium.svg';
import bigPizza from '../assets/pizza_imgs/pizza_big.svg';

const pizzaItems = [
  {
    id: 1,
    name: 'Mała',
    size: 25,
    price: 10,
    isActive: false,
    img: smallPizza,
    ingredients: [],
    maxWeight: 30,
    weight: 0,
    totalPrice: 0,
  },
  {
    id: 2,
    name: 'Średnia',
    size: 35,
    price: 18,
    isActive: false,
    img: mediumPizza,
    ingredients: [],
    maxWeight: 40,
    weight: 0,
    totalPrice: 0,
  },
  {
    id: 3,
    name: 'Mega',
    size: 50,
    price: 24,
    isActive: false,
    img: bigPizza,
    ingredients: [],
    maxWeight: 50,
    weight: 0,
    totalPrice: 0,
  },
];

export default pizzaItems;
