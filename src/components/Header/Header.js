import React from 'react';
import './Header.css';
import Button from '../Button/Button';

const header = (props) => {
    return (
            <div className='Header'>
                <nav>
                    <ul>
                        <Button link='/home'>HOME</Button>
                        <Button link='/people'>PERSONS</Button>
                        <Button link='/starships'>Starships</Button>
                    </ul>
                </nav>
            </div>);
}

export default header;
