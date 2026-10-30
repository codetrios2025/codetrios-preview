import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './HeroBanner.css';
import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, ChartColumnBig, ShieldCheck  } from "lucide-react";

// import { IoCloseSharp } from "react-icons/io5";
// import ContactUs from "../HomeRoute/Contact";
//  const words = ["maintain", "secure", "optimize"];
 const words = ["Reimagine", "Automate", "Optimize"];
import AnimatedHeroBackground from "./AnimationScreen/AnimatedHeroBackground";
const HeroBanner = ({data}) =>{
    const [isOPen, setIsopen] = useState(false);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // fade out
  
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setFade(true); // fade in
        }, 500); // match CSS duration
      }, 2500);
  
      return () => clearInterval(interval);
    }, []);

    //console.log(banner)
        const formOpenHandler=()=>{
            setIsopen(true);
        }
        const formCloseHandler=()=>{
            setIsopen(false);
        }
    return(
        <AnimatedHeroBackground  className={'home-hero heroBanner'}>
            <div className="content">
                <Container className="home-hero__container">
                    <Row>
                        <Col>
                            <div className="detail" data-drift="0.18" data-scroll-fade="0.85">
                                <div className="heroSubtitle" data-reveal="down">Your Partner for Digital Growth Solutions</div>
                                <h1 data-reveal="up" data-reveal-duration="1.1s">Web Development & Digital <br/>Solutions That Help <br/><span>Businesses Grow</span></h1>
                                <div className="tagline" data-reveal="up">
                                    <span>We don’t just build websites We <span className={`fade-text ${fade ? "fade-in" : "fade-out"} highLight`}>{words[index]}.</span></span>
                                </div>
                                <div className="heroAction" data-reveal="up" data-reveal-duration="1.1s">
                                    <button type='button' onClick={formOpenHandler} className="btnStyle">Book Free Consultation</button>
                                    <Link to='/'>Explore Our Services <ArrowUpRight className="icon" /></Link>
                                </div>
                                <ul data-reveal="up" data-reveal-duration="1.1s">
                                    <li><span className="icon"><Settings  /></span> Strategy-led</li>
                                    <li><span className="icon"><ChartColumnBig /></span> Build to scale</li>
                                    <li><span className="icon"><ShieldCheck /></span> Groeth-focused</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </AnimatedHeroBackground >
    )
}

export default HeroBanner;