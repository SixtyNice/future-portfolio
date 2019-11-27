import React from 'react'
import './Card.css';
import zoom from '../../SVG/zoom.svg';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card__intro">   
            
            </div>
            <img className='card__zoom' src={zoom} alt="moon" />

        </div>
    )
}
