import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div className="button-wrapper">
        <button className="button">{props.text}</button>
        </div>
    )
}