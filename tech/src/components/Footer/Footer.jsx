import Logo from '../Image/Footer_logo.svg';
import Facebook from '../Image/facebook.svg';
import Twitter from '../Image/twitter.svg';
import Instagram from '../Image/instagram.svg';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer_head">
                    <p className='footer_description'>
                        Whether you're looking to switch to solar energy or 
                        upgrade your cable services, our sales and marketing 
                        company is here to help. Contact us today to start 
                        saving on your energy bills and enjoy reliable 
                        connectivity from the leading solar and cable companies 
                        in the DC, Maryland, and Virginia area. Snag the 
                        best deals with us and embrace a brighter and 
                        more connected future.
                    </p>
                </div>
                <hr style={{opacity: '.2', margin: '0'}}/>
                <div className="footer_content">
                    <div className="footer_logo">
                        <img src={Logo} alt="Logo" />
                        <span className='footer_logo_desc'> 
                            Contact us today to explore our services and 
                            take advantage of the great deals available 
                            from the leading solar and cable companies in 
                            the DC, Maryland, and Virginia area. Let us 
                            be your trusted partner in finding the best 
                            solutions for your energy and connectivity needs.
                        </span>
                    </div>
                    <div className="footer_link">
                        <span className='footer_title'>Quick Links</span>
                        <ul className='footer_nav'>
                            <li className='footer_item'><a href="/#">Home</a></li>
                            <li className='footer_item'><a href="/#">About us</a></li>
                            <li className='footer_item'><a href="/#">Solar Initiatives</a></li>
                            <li className='footer_item'><a href="/#">Our Services</a></li>
                            <li className='footer_item'><a href="/#">Community</a></li>
                            <li className='footer_item'><a href="/#">Aesthetics</a></li>
                        </ul>
                    </div>
                    <div className="footer_services">
                        <span className='footer_title'>Services</span>
                        <ul className='footer_nav'>
                            <li className='footer_item'><a href="/#">Solar Solution</a></li>
                            <li className='footer_item'><a href="/#">Cable Services</a></li>
                            <li className='footer_item'><a href="/#">Deals and Promotions</a></li>
                            <li className='footer_item'><a href="/#">Consultation and Support</a></li>
                        </ul>
                    </div>
                    <div className="footer_contacts">
                        <span className="footer_title">Contact</span>
                        <ul className='footer_nav'>
                            <li className='footer_item footer_phone'><a href="/#">0123456789</a></li>
                            <li className='footer_item footer_message'><a href="/#">companyname@gmail.com</a></li>
                            <li className="footer_item footer_network">
                                <div className="footer_block_networks">
                                    <a className='footer_links footer_facebook' style={{marginRight: '7px', marginLeft: '-2px   '}} href="/#"><img src={Facebook} alt="Facebook" /></a>
                                    <a className='footer_links footer_twitter' style={{marginRight: '10px', paddingBottom: '2px'}} href="/#"><img src={Twitter} alt="Twitter" /></a>
                                    <a className='footer_links footer_instagram' href="/#"><img src={Instagram} alt="Instagram" /></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr style={{opacity: '.2', margin: '0'}}/>
                <div className="footer_floor">
                    <span>© 2023 Company Name  -  developed by Roots Digital Marketing</span>
                </div>
            </div>
        </footer>
    )
}