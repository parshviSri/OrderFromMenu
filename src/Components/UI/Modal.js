import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
import { Fragment } from 'react';
const Backdrop = (props)=>{
    const closeCart = () =>{
        props.onClose();
    }
    return <div className={classes.backdrop} onClick={closeCart}/>
}
const ModalOverLay=props =>{
    return(<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}
const Modal = props => {
    const element= document.getElementById('overlay')
    const closeModel = () =>{
        props.closeCart()
    }
    return(
        <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={closeModel}/>,element)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,element)}

        </Fragment>
    )
}

export default Modal