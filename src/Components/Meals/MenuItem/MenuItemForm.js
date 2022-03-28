import classes from './MenuItemForm.module.css';
import Input from '../../UI/Input';
import  {useRef,useState} from 'react';

const MenuItemForm =(props)=>{
    const [AmountIsValid,setAmountIsValid]=useState(false);

    const amountInputRef= useRef();

    const submitHandler = event =>{
        event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
                }}
                />
        <button className={classes.button}>+Add</button>
        {AmountIsValid && <p>Please Enter a valid (1-5)</p> }
    </form>
    )
    
}

export default MenuItemForm