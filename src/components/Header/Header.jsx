import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className ="header">
            <a className="header-link" href="#">About me</a>
            <a className="header-link" href="#">My Skills</a>
            <a className="header-link" href="#">My Projects</a>
            <a className="header-link" href="#">Contact</a>
        </header>
    )
}
