import React from 'react'
import Card from '../Card/Card';
import './Projects.css';

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}
