import React from 'react';
import './Button.css';
import {NavLink} from 'react-router-dom';

const button = (props) => {
    return (
            <div className='Button'>
                <NavLink className='Link' to={props.link}>{props.children}</NavLink>
            </div>
    );
}

export default button;