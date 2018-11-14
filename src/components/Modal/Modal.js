import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {
    
    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }*/
    
    render () {
        console.log('[Modal]', this.props.personInfo);
        let personalData;
        if (this.props.personInfo !== null) {
            personalData = <h2>{this.props.personInfo.name}</h2>
        } else {
            personalData = <h2>break</h2>; 
        }

    return(
        <>
        <div 
        className='Modal'
        style={{transform: this.props.show ? 'translateY(0)' 
                : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'}}>
                    {personalData}
        </div>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        </>
    );
}
}

export default Modal;