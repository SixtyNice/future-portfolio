import React from 'react';
import './About.css';
import Header from '../Header/Header';
import SvgProgrammer from '../SvgProgrammer/SvgProgrammer';
import Button from '../Button/Button';

export default function About() {
    return (
        <section className="about">
        <div className="about-content">
        <SvgProgrammer/>
        <p className="about-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque facere dicta non neque maxime incidunt saepe dignissimos repellat praesentium? Debitis cupiditate fuga voluptatum recusandae, aspernatur itaque iste impedit vero est. Lorem, ipsum dolor sit amet r itaque iste impedit vero est. Ernatur itaque iste impedit vero est. Lorem, ipsum dolor sit amet r itaque iste impedit vero est.</p>
        </div>
        <Button text="Write me"/>
        </section>
    )
}




