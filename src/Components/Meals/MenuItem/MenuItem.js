import { useContext } from 'react';
import MenuItemForm from './MenuItemForm';
import CartContext from '../../Store/cart-context'
import classes from './MenuItem.module.css';
const MenuItem= (props) =>{
    const Cartctx=useContext(CartContext);

    const price=`$ ${props.meal.price.toFixed(2)}`;

    const addTocartHandler = amount => {
        const item ={
            name:props.meal.name,
            price:props.meal.price,
            amount:amount,
            id:props.meal.id
        }
        Cartctx.addItem(item)
    }
    return(
        <li className={classes.meal}>
        <div >
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MenuItemForm id={props.meal.id} onAddToCart={addTocartHandler}/>
        </div>
        </li>
    )
}

export default MenuItem