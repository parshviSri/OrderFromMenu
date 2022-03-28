import { useReducer } from 'react';
import CartContext from './cart-context.js' ; 
const defaultCartState={
    item:[],
    totalAmount:0
}
const cartReducer=(state,action) =>{
    if(action.type == 'ADD'){
        const updateItem= state.item.concat(action.item)
        const updateTotalAmount= state.totalAmount+action.item.price * action.item.amount

        return {
            item: updateItem,
            totalAmount:updateTotalAmount
        }
    }
    return defaultCartState


}
const CartProvider = props =>{
    const[cartState, dispatchCartAction]=useReducer(cartReducer,defaultCartState)
    const addItemsHandler =(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    };
    const removeItemsHandler=(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
 
    }
    const cartContext={
        item:cartState.item,
        total:cartState.totalAmount,
        addItem:addItemsHandler,
        removeItem:removeItemsHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider