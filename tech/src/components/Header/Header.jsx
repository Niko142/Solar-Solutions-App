// import './Header.css';
import Logo from '../Image/Logo.svg';
import { useEffect, useState } from 'react';
export default function Header() {

    const [active, setActive] = useState(false);
    useEffect(()=> {
        window.addEventListener('resize', () => {
            const screenWidth = document.body.clientWidth;
            if (screenWidth > 970) {setActive(false)}
        })
    }, [active]);
    
    return(
        <header>
            <nav className="nav">   
                <img className='nav_logo' src={Logo} alt="Logo"/>
                <ul className={active ? 'nav_ul_active' : 'nav_ul'}>
                    <li className='nav_item'><a className='nav_item nav_link' href="/#">Home</a></li>
                    <li className='nav_item'><a className='nav_link' href="/#">About us</a></li>
                    <li className='nav_item'><a className='nav_link' href="/#">Solar Initiatives</a></li>
                    <li className='nav_item'><a className='nav_link' href="/#">Our Services</a></li>
                    <li className='nav_item'><a className='nav_link' href="/#">Community</a></li>
                    <li className='nav_item'><a className='nav_link' href="/#">Aesthetics</a></li>
                </ul>
                <button className='nav_button' onClick={() => setActive(!active)}>
                    <span className='nav_button nav_line'></span>
                    <span className='nav_button nav_line'></span>
                    <span className='nav_button nav_line'></span>
                </button>
            </nav>
            {console.log(active)}
        </header>
    )
}