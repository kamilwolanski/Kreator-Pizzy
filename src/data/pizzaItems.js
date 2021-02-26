import pizzaItem from '../assets/pizza_imgs/pizzaItem.svg';
import pizza1 from '../assets/pizza_imgs/pizza1.svg';
import pizza2 from '../assets/pizza_imgs/pizza2.svg';
import pizza3 from '../assets/pizza_imgs/pizza3.svg';

const pizzaItems = [
  {
    id: 1,
    name: 'Mała',
    size: 25,
    price: 10,
    isActive: false,
    img: pizza1,
    ingredients: [],
    maxWeight: 30,
    weight: 0,
    totalPrice: 0,
    width: 160,
  },
  {
    id: 2,
    name: 'Średnia',
    size: 35,
    price: 18,
    isActive: false,
    img: pizza2,
    ingredients: [],
    maxWeight: 40,
    weight: 0,
    totalPrice: 0,
    width: 175,
  },
  {
    id: 3,
    name: 'Mega',
    size: 50,
    price: 24,
    isActive: false,
    img: pizza3,
    ingredients: [],
    maxWeight: 50,
    weight: 0,
    totalPrice: 0,
    width: 190,
  },
];

export default pizzaItems;
