import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import { useContext } from 'react';
import CartContext from '../Store/cart-context';
const HeaderCartButton = props =>{
    const cartCntx=useContext(CartContext);
    const noOfItems= cartCntx.item.reduce((curr,item)=>{
        return curr+item.amount
    },0)
    const openCart =() =>{
        props.clickCart()
    }
    return(
        <button className={classes.button} onClick={openCart}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Cart</span>
            <span className={classes.badge}>{noOfItems}</span>
        </button>
    )
}
export default HeaderCartButton