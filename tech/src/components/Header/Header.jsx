import './Header.css';
import Logo from '../Image/Logo.svg';
import { useEffect, useState } from 'react';
export default function Header() {
    const [active, setActive] = useState(false);
    useEffect(()=> {
        window.addEventListener('resize', (e) => {
            const screenWidth = document.body.clientWidth;
            if (screenWidth > 970) {setActive(false)}
        })
    }, [active]);
    
    return(
        <header>
            <nav className="navbars">
                
                    <img src={Logo} alt="Logo"/>

                <ul className={active ? 'nav_ul_active' : 'nav_ul'}>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">About us</a></li>
                    <li><a href="/#">Solar Initiatives</a></li>
                    <li><a href="/#">Our Services</a></li>
                    <li><a href="/#">Community</a></li>
                    <li><a href="/#">Aesthetics</a></li>
                </ul>
                <button className='nav-burger-button' onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            {console.log(active)}
        </header>
    )
}