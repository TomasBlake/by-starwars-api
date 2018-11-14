import React from 'react';
import './DataField.css';

const dataField = (props) => {
    return (
        <div className='DataField' onClick={props.clicked}>
            <h2>{props.name}</h2>
            <p><strong>výška:</strong> {props.height} cm</p>
            <p><strong>váha:</strong> {props.mass} kg</p>
            <p><strong>pohlaví:</strong> {props.gender}</p>
            <p><strong>narození:</strong> {props.birthYear} hvězdného data</p>
            <p><i>Klikni pro více detailů..</i></p>
        </div>
    );
}

export default dataField;