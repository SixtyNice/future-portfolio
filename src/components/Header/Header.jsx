import React from 'react';
import './Header.css';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <a className="header__link" href="#">About me</a>
                <a className="header__link" href="#">My Skills</a>
                <a className="header__link" href="#">My Projects</a>
                <a className="header__link" href="#">Contact</a>
                <LangSwitcher ln="EN" />
            </nav>
        </header>
    )
}
