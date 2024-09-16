import './Footer.css';
import Logo from '../Image/Footer_logo.svg';
import Facebook from '../Image/facebook.svg';
import Twitter from '../Image/twitter.svg';
import Instagram from '../Image/instagram.svg';

export default function Footer() {
    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer_header">
                    <p>
                        Whether you're looking to switch to solar energy or 
                        upgrade your cable services, our sales and marketing 
                        company is here to help. <br/> Contact us today to start 
                        saving on your energy bills and enjoy reliable 
                        connectivity from the leading solar and cable companies 
                        in the DC, Maryland, and Virginia area. Snag the 
                        best deals with us and embrace a brighter and 
                        more connected future.
                    </p>
                </div>
                <div className="footer_content">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                        <span> 
                            Contact us today to explore our services and 
                            take advantage of the great deals available 
                            from the leading solar and cable companies in 
                            the DC, Maryland, and Virginia area. Let us 
                            be your trusted partner in finding the best 
                            solutions for your energy and connectivity needs.
                        </span>
                    </div>
                    <div className="link">
                        <span className='head'>Quick Links</span>
                        <ul>
                            <li><a href="/#">Home</a></li>
                            <li><a href="/#">About us</a></li>
                            <li><a href="/#">Solar Initiatives</a></li>
                            <li><a href="/#">Our Services</a></li>
                            <li><a href="/#">Community</a></li>
                            <li><a href="/#">Aesthetics</a></li>
                        </ul>
                    </div>
                    <div className="services">
                        <span className='head'>Services</span>
                        <ul>
                            <li><a href="/#">Solar Solution</a></li>
                            <li><a href="/#">Cable Services</a></li>
                            <li><a href="/#">Deals and Promotions</a></li>
                            <li><a href="/#">Consultation and Support</a></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <span className="head">Contact</span>
                        <ul>
                            <li id='phone'><a href="/#">0123456789</a></li>
                            <li id='message'><a href="/#">companyname@gmail.com</a></li>
                            <li className="network">
                                <div className="networks">
                                    <a style={{marginRight: '9px'}} href="/#"><img src={Facebook} alt="Facebook" /></a>
                                    <a style={{marginRight: '12px'}} href="/#"><img src={Twitter} alt="Twitter" /></a>
                                    <a href="/#"><img src={Instagram} alt="Instagram" /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_end">
                    <span>© 2023 Company Name  -  developed by Roots Digital Marketing</span>
                </div>
            </div>
        </footer>
    )
}