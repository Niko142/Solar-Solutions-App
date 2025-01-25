import Logo from "../../assets/images/Logo.svg";
import { useEffect, useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    function resizeNavbar() {
      const screenWidth = document.body.clientWidth;
      if (screenWidth > 1230) {
        setActive(false);
      }
    }

    // let resizeTimeout;
    // const handleResize = () => {
    //   clearTimeout(resizeTimeout);
    //   resizeTimeout = setTimeout(resizeNavbar, 50); // Задержка предотвращает множественные вызовы
    // };
    // handleResize()

    window.addEventListener("resize", resizeNavbar);
    return () => {
      window.removeEventListener("resize", resizeNavbar);
    };
  }, [active]);

  return (
    <header className="header" id="header">
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
              <a href="/#" className="header__link">
                About us
              </a>
            </li>
            <li>
              <a href="#solution" className="header__link">
                Solar Initiatives
              </a>
            </li>
            <li>
              <a href="#experience" className="header__link">
                Our Services
              </a>
            </li>
            <li>
              <a href="/#" className="header__link">
                Community
              </a>
            </li>
            <li>
              <a href="/#" className="header__link">
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
