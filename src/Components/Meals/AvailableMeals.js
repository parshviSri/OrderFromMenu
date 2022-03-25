import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MenuItems from './MenuItem/MenuItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeals = () =>{
      const mealList= DUMMY_MEALS.map((meal)=><MenuItems id={meal.id} key ={meal.id} meal={meal}/>)
      return(
          <Card>
          <ul className={classes.meals}>
              {mealList}
          </ul>
          </Card>
      )
  }
  export default AvailableMeals