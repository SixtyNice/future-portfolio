import React from 'react'
import './Contact.css';
import Input from '../Input/Input';
import ContactLink from '../ContactLink/ContactLink';
import mail from '../../SVG/mail.svg'
import telegram from '../../SVG/telegram.svg'
import github from '../../SVG/github.svg'
import Button from '../Button/Button';


export default function Contact() {
    return (
        <section id="contacts" className='contact'>
            <div className="contact-block">
                <h2 className="contact__title">
                    My Contacts
                    </h2>
                <ContactLink icon={mail} text="sixtynicework@gmail.com" />
                <ContactLink icon={telegram} text="@SixtyNice" />
                <ContactLink icon={github} text="SixtyNice" />


            </div>
            <div className="contact-form-wrapper">
                <form className="contact__form" action="">
                    <div className="input-wrapper">
                        <Input label="From: " />
                        <Input label="Theme: " />
                    </div>
                    <textarea className="textarea"></textarea>
                    <Button text="Write Me"/>
                </form>
            </div>
        </section>
    )
}
