import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from '../CSS/Header.module.css';
import { Link, Outlet  } from "react-router-dom";
import Logo from '../../assets/images/codetrios_logo.svg';
import ContactUs from "../HomeRoute_V1/Contact";
import { Menu, ChevronDown, CircleX, Mails, Phone, MessageCircle } from "lucide-react";
const Header=()=>{
    const [isOPen, setIsopen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(false);
    const closeMenu = () => {
    setMenuOpen(false);
    setSubOpen(false);
  };
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }

    return(
        <>
            <header className={`header ${isScrolled ? Style.headerFix : ""}`}>
                <div className={Style.topHead}>
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>
                                        <a href="mailto:info@codetrios.com"><span><Mails className={Style.icon} /></span>info@codetrios.com</a></li>
                                    <li>
                                        <a href="tel:8882309150"><span><Phone className={Style.icon} /></span>+91 8882309150</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 509 511.514"><path fill="#fff" d="M434.762 74.334C387.553 26.81 323.245 0 256.236 0h-.768C115.795.001 2.121 113.696 2.121 253.456l.001.015a253.516 253.516 0 0033.942 126.671L0 511.514l134.373-35.269a253.416 253.416 0 00121.052 30.9h.003.053C395.472 507.145 509 393.616 509 253.626c0-67.225-26.742-131.727-74.252-179.237l.014-.055zM255.555 464.453c-37.753 0-74.861-10.22-107.293-29.479l-7.72-4.602-79.741 20.889 21.207-77.726-4.984-7.975c-21.147-33.606-32.415-72.584-32.415-112.308 0-116.371 94.372-210.743 210.741-210.743 56.011 0 109.758 22.307 149.277 61.98a210.93 210.93 0 0161.744 149.095c0 116.44-94.403 210.869-210.844 210.869h.028zm115.583-157.914c-6.363-3.202-37.474-18.472-43.243-20.593-5.769-2.121-10.01-3.202-14.315 3.203-4.305 6.404-16.373 20.593-20.063 24.855-3.69 4.263-7.401 4.815-13.679 1.612-6.278-3.202-26.786-9.883-50.899-31.472a192.748 192.748 0 01-35.411-43.867c-3.712-6.363-.404-9.777 2.82-12.873 3.224-3.096 6.363-7.381 9.48-11.092a41.58 41.58 0 006.357-10.597 11.678 11.678 0 00-.508-11.09c-1.718-3.18-14.444-34.357-19.534-47.06-5.09-12.703-10.37-10.603-14.272-10.901-3.902-.297-7.911-.19-12.089-.19a23.322 23.322 0 00-16.964 7.911c-5.707 6.298-22.1 21.673-22.1 52.849s22.671 61.249 25.852 65.532c3.182 4.284 44.663 68.227 108.288 95.649 15.099 6.489 26.891 10.392 36.053 13.403a87.504 87.504 0 0025.216 3.718c4.905 0 9.82-.416 14.65-1.237 12.174-1.782 37.453-15.291 42.776-30.073s5.303-27.57 3.711-30.093c-1.591-2.524-5.704-4.369-12.088-7.615l-.038.021z"/></svg>
                                            </span>Chat on WhatsApp</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.head}>
                                <div className={Style.logo}>
                                    <Link to="/" aria-label="CodeTrios homepage">
                                        <img
                                            src={Logo}
                                            alt="CodeTrios"
                                            width="180"
                                            height="42"
                                            fetchPriority="high"
                                            loading="eager"
                                            decoding="async"
                                        />
                                        </Link>
                                </div>
                                <button type="button" className="menuToggle" aria-label="Open navigation menu"  onClick={() => setMenuOpen(true)}><Menu /></button>
                                <div className={Style.headFlex}>
                                    <div className={`mainMenu ${menuOpen ? "activeMenu" : ""}`}>
                                        <div className={Style.mobMenuHead}>
                                            <div className={Style.logo}>
                                                <Link to="/" aria-label="CodeTrios homepage">
                                                    <img
                                                        src={Logo}
                                                        alt="CodeTrios"
                                                        width="180"
                                                        height="42"
                                                        fetchPriority="high"
                                                        loading="eager"
                                                        decoding="async"
                                                    />
                                                </Link>
                                            </div>
                                            <button type='button' className="closeBtn" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path vector-effect="non-scaling-stroke" d="M18 6 6 18"/><path vector-effect="non-scaling-stroke" d="m6 6 12 12"/></svg>
                                            </button>
                                        </div>
                                        <ul>
                                            <li><Link onClick={closeMenu} to="" title="Home"><span>Home</span></Link></li>
                                            <li><Link onClick={closeMenu} to="/about-us" title="About"><span>About</span></Link></li>
                                            <li>
                                                <Link onClick={closeMenu} to="/services" title="Services"><span>Services <ChevronDown className="icon" /></span></Link>
                                                <button type="button" className="subToggle" onClick={() => setSubOpen(!subOpen)}>
                                                    <ChevronDown className={subOpen ? "rotate" : ""} />
                                                </button>
                                                <ul className={`subMenuMob ${Style.subMenu} ${subOpen ? "open" : ""}`}>
                                                    <li><Link onClick={closeMenu} to="/website-design-services" title="website design services">Website Design</Link></li>
                                                    <li><Link onClick={closeMenu} to="/web-development-services" title="web-development-services">Web Development</Link></li>
                                                    <li><Link onClick={closeMenu} to="/web-application-development" title="web application development">Web Applications</Link></li>
                                                    <li><Link onClick={closeMenu} to="/ui-ux-design-services" title="ui ux design services">Design Services</Link></li>
                                                    <li><Link onClick={closeMenu} to="/ecommerce-development-services" title="ecommerce development services">eCommerce Solutions</Link></li>
                                                    <li><Link onClick={closeMenu} to="/custom-software-solutions" title="custom software solutions">Technology Solutions</Link></li>
                                                    <li><Link onClick={closeMenu} to="/digital-strategy-consulting" title="digital strategy consulting">Digital Strategy</Link></li>
                                                    <li><Link onClick={closeMenu} to="/web-hosting-services" title="web hosting services">Web Hosting Service</Link></li>
                                                    <li><Link onClick={closeMenu} to="/geo-seo-services" title="Geo & SEO Services">Geo & SEO Services</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link onClick={closeMenu} to="/technologies" title="About"><span>Technologies</span></Link></li>
                                            <li><Link onClick={closeMenu} to="/portfolio" title="Portfolio"><span>Portfolio</span></Link></li>
                                            <li><Link onClick={closeMenu} to="/contact-us" title="Contact Us"><span>Contact Us</span></Link></li> 
                                        </ul>
                                    </div>
                                    <button type="button" onClick={formOpenHandler} className={Style.getTouch}>Get Started</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header >
            {isOPen && 
                <div className="formPop">
                    <div className="formElem">
                        <button type='button' onClick={formCloseHandler} className="closeBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path vector-effect="non-scaling-stroke" d="M18 6 6 18"/><path vector-effect="non-scaling-stroke" d="m6 6 12 12"/></svg>
                        </button>
                        <ContactUs />
                    </div>
                </div>
            }
        </>
    )
}

export default Header