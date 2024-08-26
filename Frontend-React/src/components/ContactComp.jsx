import React from 'react';

import '../styles/Components/ContactComp.css';
import { IoIosMail } from "react-icons/io";


const ContactComp = () => {
    return (
        <div className='Container' id='contact'>
            <h1 className='titleAbout'>Contact</h1>
            <h2 className='subTitle'>Send me an email</h2>
            <a href="mailto:halter.guilhermenunes@gmail.com" className='Email'><IoIosMail className='emailIcon'/>halter.guilhermenunes@gmail.com</a>
        </div>
    );
};

export default ContactComp;