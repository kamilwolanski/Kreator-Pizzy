import salamiImg from '../assets/pizza_ingredients/salami1.svg';
import cheeseImg from '../assets/pizza_ingredients/cheese1.svg';
import mushroomsImg from '../assets/pizza_ingredients/champignon1.svg';
import pepperImg from '../assets/pizza_ingredients/peppers1.svg';
import tomatoesImg from '../assets/pizza_ingredients/tomatoes1.svg';
import olivesImg from '../assets/pizza_ingredients/olives1.svg';
import basilImg from '../assets/pizza_ingredients/basil1.svg';
import shrimpImg from '../assets/pizza_ingredients/shrimp.svg';

const pizzaIngredients = [
  {
    id: 1,
    name: 'Salami',
    amount: 0,
    price: 0.5,
    img: salamiImg,
    weight: 2,
    isToMuch: false,
  },
  {
    id: 2,
    name: 'Ser',
    amount: 0,
    price: 2,
    img: cheeseImg,
    weight: 2,
    isToMuch: false,
  },
  {
    id: 3,
    name: 'krewetka',
    amount: 0,
    price: 3,
    img: shrimpImg,
    weight: 1,
    isToMuch: false,
  },
  {
    id: 4,
    name: 'Pieczarki',
    amount: 0,
    price: 0.25,
    img: mushroomsImg,
    weight: 1.5,
    isToMuch: false,
  },
  {
    id: 5,
    name: 'Papryka',
    amount: 0,
    price: 0.25,
    img: pepperImg,
    weight: 1,
    isToMuch: false,
  },
  {
    id: 6,
    name: 'Pomidory',
    amount: 0,
    price: 1,
    img: tomatoesImg,
    weight: 2,
    isToMuch: false,
  },
  {
    id: 7,
    name: 'Oliwki',
    amount: 0,
    price: 2,
    img: olivesImg,
    weight: 1,
    isToMuch: false,
  },
  {
    id: 8,
    name: 'Bazylia',
    amount: 0,
    price: 0.25,
    img: basilImg,
    weight: 0.25,
    isToMuch: false,
  },
];

export default pizzaIngredients;
