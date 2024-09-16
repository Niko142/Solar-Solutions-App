import { useState } from 'react';
import Button from '../Button/Button';
import './Contact.css';

export default function ContactContent() {
    const [type, setType] = useState('');
    return (
        <section className="contact">
            <div className="contact_wrapper">
                <div className="contact_description">
                    <h1 style={{color: 'var(--white)', }}>Who We Are</h1>
                    <p className='contact_text'> 
                        Welcome to our sales and marketing company, 
                        where we specialize in helping customers snag 
                        great deals from the leading solar and cable companies 
                        in the DC, Maryland, and Virginia area.We understand 
                        that finding the right solar and cable solutions for 
                        your needs can be a daunting task, which is why 
                        we're here to make the process easier and more 
                        affordable for you.
                    </p>
                    <div className="gap">
                        <Button id={'right'} isActive={type === 'read'} onClick={() => setType('read')}>Read more</Button>
                        <Button isActive={type === 'contact'} onClick = {() => setType('contact')}>Contact us today</Button>
                    </div>
                </div>
                <div className="contact_image">
                    <div className="img1"></div>
                    <div className="img2"></div>
                </div>
            </div>
        </section>
    )
}