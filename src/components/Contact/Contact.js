import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-heading bg-warning'>
                <h1>CONTACT US</h1>
            </div>
            <div className='contact'>
                <div>
                    <h1><i class="fas fa-phone-volume"></i>Phone </h1>
                    <p>+88 01618847384</p>
                </div>
                <div>
                    <h1><i class="fas fa-envelope-open-text"></i>E-mail</h1>
                    <p>info@shafinsbd.com</p>
                </div>
                <div>
                    <h1><i class="fab fa-skype"></i>Skype</h1>
                    <p>john doe teacher</p>
                </div>
                <div>
                    <h1><i class="fas fa-blog"></i>Web</h1>
                    <p>Shafinsbd.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;