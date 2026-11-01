import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './HeroBanner.css';
import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, ChartColumnBig, ShieldCheck  } from "lucide-react";
 const words = ["Reimagine", "Automate", "Optimize"];
import AnimatedHeroBackground from "./AnimationScreen/AnimatedHeroBackground";


const HeroBanner = ({data}) =>{
    const [isOPen, setIsopen] = useState(false);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
    // Trigger hero reveal after initial render.
    const revealTimer = requestAnimationFrame(() => {
      setHeroVisible(true);
    });

    return () => cancelAnimationFrame(revealTimer);
  }, []);
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
        <AnimatedHeroBackground className={`home-hero heroBanner ${heroVisible ? "hero-revealed" : ""}`}>
            <div className="content">
                <Container className="home-hero__container">
                    <Row>
                        <Col>
                            <div className="detail">
                                <div className="heroSubtitle hero-reveal-item reveal-1">Web Design & Development</div>
                                <h1 className="hero-reveal-item reveal-2">Custom Web Development <br/>for <span>Growing Businesses</span></h1>
                                <div className="tagline hero-reveal-item reveal-3">
                                    <span>Codetrios builds fast, secure, mobile-first websites designed around <br/>your business goals — not templates.</span>
                                </div>
                                <div className="heroAction hero-reveal-item reveal-4">
                                    <button type='button' onClick={formOpenHandler} className="ctBtn ct-primery-btn">Book Free Consultation</button>
                                    <Link to='/' className="ctBtn ct-secoundary-btn">Explore Our Services <ArrowUpRight className="icon" /></Link>
                                </div>
                                <ul className="hero-reveal-item reveal-5">
                                    <li><span className="icon"><Settings  /></span> Strategy-led</li>
                                    <li><span className="icon"><ChartColumnBig /></span> Build to scale</li>
                                    <li><span className="icon"><ShieldCheck /></span> Groeth-focused</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </AnimatedHeroBackground>
    )
}

export default HeroBanner;