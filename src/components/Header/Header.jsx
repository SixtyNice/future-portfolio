import React, { Component } from 'react';
import './Header.css';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import AnchorLink from 'react-anchor-link-smooth-scroll';



export default function Header() {

    return (
        <header className="header" >
            <nav className="header__nav">
                <AnchorLink className="header__link" href="#me">About me</AnchorLink>
                <AnchorLink className="header__link" href="#skills">My Skills</AnchorLink>
                <AnchorLink className="header__link" href="#projects">My Projects</AnchorLink>
                <AnchorLink className="header__link" href="#contacts">Contact</AnchorLink>
                <LangSwitcher ln="EN" />
            </nav>
        </header>
    )

}

