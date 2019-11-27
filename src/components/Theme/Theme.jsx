import React from 'react'
import './Theme.css';
import sun from '../../SVG/sun.svg';
import moon from '../../SVG/moon.svg';


export default function Theme() {

    return (
        <div className="theme">
            <img className="theme__sun" src={sun} alt="sun" />
            <img className="theme__moon" src={moon} alt="moon" />
        </div>
    )

}
