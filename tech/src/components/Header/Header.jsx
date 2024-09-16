import './Header.css';
import Logo from '../Image/Logo.svg';
export default function Header() {
    return(
        <header>
            <nav className="navbars">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" onClick={() => window.location.reload()}/>
                </div>
                <ul className='nav_ul'>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">About us</a></li>
                    <li><a href="/#">Solar Initiatives</a></li>
                    <li><a href="/#">Our Services</a></li>
                    <li><a href="/#">Community</a></li>
                    <li><a href="/#">Aesthetics</a></li>
                </ul>
            </nav>
        </header>
    )
}