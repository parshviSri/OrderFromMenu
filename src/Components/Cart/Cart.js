import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../Store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
  const cartCtx=useContext(CartContext);
  const total=cartCtx.total.toFixed(2)
  const totalAmount= `$ ${total}`;
  const hasItems = cartCtx.item.length>0;
  const onAddCartHandler = item =>{
    cartCtx.addItem({...item,amount:1})
  };
  const onRemoveCartHandler = id =>{
    cartCtx.removeItem(id)
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.item.map((item) => (
        <CartItem key ={item.id} name={item.name} amount={item.amount} price={item.price}
        onAdd={onAddCartHandler.bind(null,item)} onRemove={onRemoveCartHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );
  const closeCart =() =>{
    props.closeCart()
  }

  return (
    <Modal closeCart={closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeCart}>Close</button>
        {hasItems &&<button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;