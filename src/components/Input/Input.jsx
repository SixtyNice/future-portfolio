import React from 'react'
import './Input.css';

export default function Input(props) {
    return (
        <div className="form">
            <label>{props.label}
                    <input className="input" type="email" />
            </label>
        </div>
    )
}
