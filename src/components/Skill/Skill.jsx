import React from 'react'
import './Skill.css';
import Tree from '../Tree/Tree';

export default function Skill() {
    return (
        <section className="skill">
             <Tree />
            <div className="skill-container">
                <div className="skill-list-wrapper">
                    <h2 className="skill__title">
                        My Skills
                </h2>
                <ul className="skill__list">
                    <li className="skill__item">HTML AND CSS</li>
                    <li className="skill__item">JavaScript (ES6)</li>
                    <li className="skill__item">React (in progress 😄)</li>
                    <li className="skill__item">Git</li>
                </ul>
                </div>
            </div>
        </section>
    )
}
