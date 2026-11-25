import React, { useState, useEffect, useRef  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ArrowUpRight, Settings, ChartColumnBig, ShieldCheck  } from "lucide-react";

import './HeroBanner.css';

import HeroVideo from '../../assets/videos/process-visual-700x600-fallback.mp4';
import ContactUs from "./Contact";

const HeroBanner = () =>{
    const [isOPen, setIsopen] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);

    const videoRef = useRef(null);
    
    useEffect(() => {
    // Trigger hero reveal after initial render.
    const revealTimer = requestAnimationFrame(() => {
      setHeroVisible(true);
    });

    return () => cancelAnimationFrame(revealTimer);
  }, []);

    const formOpenHandler=()=>{
        setIsopen(true);
    }
    const formCloseHandler=()=>{
        setIsopen(false);
    }


useEffect(() => {
  const v = videoRef.current;
  if (!v) return;
  v.muted = true;                       // makes autoplay reliable
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) v.play().catch(() => {}); // ignore if the browser blocks it
}, []);



    return(
        <div className={`home-hero heroBanner ${heroVisible ? "hero-revealed" : ""}`}>
            <div className="content">
                <Container className="home-hero__container">
                    <Row>
                        <Col>
                            <div className="detail">
                                <div>
                                <div className="heroSubtitle hero-reveal-item reveal-1">Web Design & Development Company in India</div>
                                <h1 className="hero-reveal-item reveal-2">Custom Web Development <br/>for <span>Growing Businesses</span></h1>
                                <div className="tagline hero-reveal-item reveal-3">
                                    <span>Codetrios builds fast, secure, mobile-first websites designed around <br/>your business goals — not templates.</span>
                                </div>
                                <div className="heroAction hero-reveal-item reveal-4">
                                    <button type='button' onClick={formOpenHandler} className="ctBtn ct-primery-btn">Book Free Consultation</button>
                                    <Link to='/services' className="ctBtn ct-secoundary-btn">Explore Our Services <ArrowUpRight className="icon" aria-hidden="true" /></Link>
                                </div>
                                <ul className="hero-reveal-item reveal-5">
                                    <li><span className="icon"><Settings  /></span> Strategy-led</li>
                                    <li><span className="icon"><ChartColumnBig /></span> Build to scale</li>
                                    <li><span className="icon"><ShieldCheck /></span> Groeth-focused</li>
                                </ul>
                                </div>
                                <div className="hero-video">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="none"
                                        aria-hidden="true"
                                    >
                                        <source src={HeroVideo} type="video/mp4" />
                                    </video>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {isOPen && 
                <div className="formPop" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
                    <div className="formElem">
                        <button type='button' onClick={formCloseHandler} className="closeBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x preview-icon"><path vectorEffect="non-scaling-stroke" d="M18 6 6 18"/><path vectorEffect="non-scaling-stroke" d="m6 6 12 12"/></svg>
                        </button>
                        <ContactUs />
                    </div>
                </div>
            }
        </div>
    )
}

export default HeroBanner;