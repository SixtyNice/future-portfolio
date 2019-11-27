import React from 'react'
import './ContactLink.css';

export default function ContactLink(props) {
    return (
        <div className="contact-link">
            <img className="contact-link__icon" src={props.icon} />
            <span className="contact__text">{props.text}</span>
        </div>
    )
}
