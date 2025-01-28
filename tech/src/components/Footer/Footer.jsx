import Logo from "assets/images/Footer_logo.svg";
import Facebook from "assets/images/facebook.svg";
import Twitter from "assets/images/twitter.svg";
import Instagram from "assets/images/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container-top">
        <div className="footer__head">
          <p>
            Whether you're looking to switch to solar energy or upgrade your
            cable services, our sales and marketing company is here to help.
            Contact us today to start saving on your energy bills and enjoy
            reliable connectivity from the leading solar and cable companies in
            the DC, Maryland, and Virginia area. Snag the best deals with us and
            embrace a brighter and more connected future.
          </p>
        </div>
      </div>
      <hr />
      <section className="footer__main">
        <div className="container">
          <article className="footer__block footer-logo">
            <img src={Logo} alt="Logo" />
            <p>
              Contact us today to explore our services and take advantage of the
              great deals available from the leading solar and cable companies
              in the DC, Maryland, and Virginia area. Let us be your trusted
              partner in finding the best solutions for your energy and
              connectivity needs.
            </p>
          </article>
          <article className="footer__block footer-link">
            <h6>Quick Links</h6>
            <ul>
              <li>
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#experience">About us</a>
              </li>
              <li>
                <a href="#choose">Solar Initiatives</a>
              </li>
              <li>
                <a href="#service">Our Services</a>
              </li>
              <li>
                <a href="#contact">Community</a>
              </li>
              <li>
                <a href="#solution">Aesthetics</a>
              </li>
            </ul>
          </article>
          <article className="footer__block footer-services">
            <h6>Services</h6>
            <ul>
              <li>
                <a href="#solar">Solar Solution</a>
              </li>
              <li>
                <a href="#cable">Cable Services</a>
              </li>
              <li>
                <a href="#deals">Deals and Promotions</a>
              </li>
              <li>
                <a href="#consultation">Consultation and Support</a>
              </li>
            </ul>
          </article>
          <article className="footer__block footer-contacts">
            <h6>Contact</h6>
            <ul>
              <li className="footer__item footer-phone">
                <a href="tel:0123456789">0123456789</a>
              </li>
              <li className="footer__item footer-email">
                <a href="mailto:companyname@gmail.com">companyname@gmail.com</a>
              </li>
              <li>
                <div className="footer__links">
                  <a className="footer-facebook" href="https://facebook.com">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a className="footer-twitter" href="https://x.com">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                  <a className="footer-instagram" href="https://instagram.com">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <hr />
      <div className="footer__floor">
        <p>© 2023 Company Name - developed by Roots Digital Marketing</p>
      </div>
    </footer>
  );
}
