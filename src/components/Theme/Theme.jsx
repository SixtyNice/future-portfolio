import React, { Component } from 'react'
import './Theme.css';

//TODO 
// разобраться с картинкой
export default class Theme extends Component {
    state={
        theme:"Light"
    }
    render() {
        return (
            <div className="theme">
                <img className="theme-light" src="./sun.svg" alt=""/>
            </div>
        )
    }
}
