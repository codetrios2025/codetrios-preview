import React, { useState, useEffect, useRef  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './HeroBanner.css';
import { Link } from "react-router-dom";
import { ArrowUpRight, Settings, ChartColumnBig, ShieldCheck  } from "lucide-react";
import HeroVideo from '../../assets/videos/process-visual-1400x1200.webm';
// const words = ["Reimagine", "Automate", "Optimize"];

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
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setFade(false); // fade out
  
    //     setTimeout(() => {
    //       setIndex((prev) => (prev + 1) % words.length);
    //       setFade(true); // fade in
    //     }, 500); // match CSS duration
    //   }, 2500);
  
    //   return () => clearInterval(interval);
    // }, []);

    //console.log(banner)
        const formOpenHandler=()=>{
            setIsopen(true);
        }
        const formCloseHandler=()=>{
            setIsopen(false);
        }
const videoRef = useRef(null);

useEffect(() => {
  const v = videoRef.current;
  if (!v) return;
  v.muted = true;                       // makes autoplay reliable
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) v.play().catch(() => {}); // ignore if the browser blocks it
}, []);



    return(
        <div className={`home-hero heroBanner ${heroVisible ? "hero-revealed" : ""}`}>
            <div className="hero-video">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={HeroVideo} type="video/mp4" />
                </video>
                </div>
            <div className="content">
                <Container className="home-hero__container">
                    <Row>
                        <Col>
                            <div className="detail">
                                <div className="heroSubtitle hero-reveal-item reveal-1">Professional Web Design & Development Company</div>
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
        </div>
    )
}

export default HeroBanner;