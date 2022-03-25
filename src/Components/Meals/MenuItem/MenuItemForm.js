import classes from './MenuItemForm.module.css';
import Input from '../../UI/Input';
const MenuItemForm =(props)=>{
    return(
        <form className={classes.form}>
            <Input
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
    </form>
    )
    
}

export default MenuItemForm