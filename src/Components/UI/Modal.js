import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
import { Fragment } from 'react';
const Backdrop = ()=>{
    return <div className={classes.backdrop} />
}
const ModalOverLay=props =>{
    return(<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}
const Modal = props => {
    const element= document.getElementById('overlay')
    return(
        <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,element)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,element)}

        </Fragment>
    )
}

export default Modal