import { Fragment } from 'react';
import classes from './header.module.css';
import meals from './../../assets/meals.jpeg';
import HeaderCartButton from './HearderCartButton';
const Header= props =>{
    const openCart =()=>{
        props.onClick()
    }
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton clickCart={openCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of foods"/>
            </div>
        </Fragment>
    )

}

export default Header