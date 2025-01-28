import Logo from "assets/images/Logo.svg";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  const resizeHeader = useRef(null);

  useEffect(() => {
    if (resizeHeader.current) {
      const headObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const { width } = entry.contentRect;
          if (width > 1230) {
            setActive((list) => (list = false));
          }
        }
      });

      headObserver.observe(resizeHeader.current);

      return () => {
        headObserver.disconnect();
      };
    }
  }, []);

  return (
    <header ref={resizeHeader} className="header" id="header">
      <div className="container">
        <div className="header__logo" onClick={() => window.location.reload()}>
          <img src={Logo} className="header__logo" alt="Logo" />
        </div>
        <nav className="header__navbar">
          <ul className={active ? "header__list-toogle" : "header__list"}>
            <li>
              <a href="/" className="header__link">
                Home
              </a>
            </li>
            <li>
              <a href="#experience" className="header__link">
                About us
              </a>
            </li>
            <li>
              <a href="#choose" className="header__link">
                Solar Initiatives
              </a>
            </li>
            <li>
              <a href="#service" className="header__link">
                Our Services
              </a>
            </li>
            <li>
              <a href="#contact" className="header__link">
                Community
              </a>
            </li>
            <li>
              <a href="#solution" className="header__link">
                Aesthetics
              </a>
            </li>
          </ul>
          <button className="nav__btn" onClick={() => setActive(!active)}>
            <span className="btn__line"></span>
            <span className="btn__line"></span>
            <span className="btn__line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
