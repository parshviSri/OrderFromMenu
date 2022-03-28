import { useReducer } from 'react';
import CartContext from './cart-context.js' ; 
const defaultCartState={
    item:[],
    totalAmount:0
}
const cartReducer=(state,action) =>{
    if(action.type == 'ADD'){
        const checkExistingItemIndex=state.item.findIndex((item)=>item.id === action.item.id);
        const checkExistingitem= state.item[checkExistingItemIndex];
        let updateItem;
        let updateItems

        if(checkExistingitem){
             updateItem={
                ...checkExistingitem,
                amount:checkExistingitem.amount+action.item.amount
            }
           updateItems=[...state.item];
           updateItems[checkExistingItemIndex]=updateItem
        }
        else{
            updateItems= state.item.concat(action.item)

        }
        const updateTotalAmount= state.totalAmount+action.item.price * action.item.amount;
        return {
            item: updateItems,
            totalAmount:updateTotalAmount
        }
    }
    if(action.type =='REMOVE'){
        const checkExistingItemIndex=state.item.findIndex((item)=>item.id === action.id);
        const checkExistingitem= state.item[checkExistingItemIndex];
        let updateItem;
        let updateItems

        if(checkExistingitem.amount == 1){
             updateItems= state.item.filter((item)=> item.id != action.id)
           
        }
        else{
            updateItem={...checkExistingitem, amount:checkExistingitem.amount-1}
            updateItems=[...state.item];
           updateItems[checkExistingItemIndex]=updateItem

        }
        const updateTotalAmount= state.totalAmount-checkExistingitem.price;
        return {
            item: updateItems,
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