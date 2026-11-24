import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
//logo icon
import HTML from '../../assets/images/icon/html_logo.webp';
import js from '../../assets/images/icon/js_logo.webp';
import bootstrap from '../../assets/images/icon/bootstrap_logo.webp';
import vue from '../../assets/images/icon/vue_logo.webp';
import express from '../../assets/images/icon/express_logo.webp';
import reactVite from '../../assets/images/icon/reactVite_logo.webp';
import reactNative from '../../assets/images/icon/react_logo.webp';

import php from '../../assets/images/icon/php_logo.webp';
import laravel from '../../assets/images/icon/laravel_logo.webp';
import wordpress from '../../assets/images/icon/wordpress_logo.webp';
import drupal from '../../assets/images/icon/drupal_icon.webp';
import node from '../../assets/images/icon/node_logo.webp';
import Python from '../../assets/images/icon/paython_logo.webp';
import strapi from '../../assets/images/icon/strapi_logo.webp';
import zframe from '../../assets/images/icon/zframe_logo.webp';

import mysql from '../../assets/images/icon/mysql_logo.webp';
import sql from '../../assets/images/icon/sql_logo.webp';
import monogoDB from '../../assets/images/icon/monogodb_logo.webp';
import cloudSql from '../../assets/images/icon/cloud-sql_logo.webp';

import figma from '../../assets/images/icon/figma_logo.webp';
import adobeXD from '../../assets/images/icon/Adobe-XD_logo.webp';
import photoshop from '../../assets/images/icon/ps_logo.webp';
import Illustrator from '../../assets/images/icon/Illustrator_logo.webp';
import corelDraw from '../../assets/images/icon/CorelDRAW_logo.webp';
import canva from '../../assets/images/icon/canva_logo.webp';

//Animation logo
import gsap from '../../assets/images/icon/gsap_logo.webp';
import three from '../../assets/images/icon/three_logo.webp';
import anime from '../../assets/images/icon/anime_logo.webp';
import lottie from '../../assets/images/icon/lottie_logo.webp';
import aos_logo from '../../assets/images/icon/aos_logo.webp';

import aws from '../../assets/images/icon/aws_cloud.webp';
import gCloud from '../../assets/images/icon/google_cloud.webp';
import hostinger from '../../assets/images/icon/hostinger_cloud.webp';
import tailwind from '../../assets/images/icon/tailwind_logo.webp';
import openAI from '../../assets/images/icon/OpenAI_logo.webp';
import claude from '../../assets/images/icon/Claude_ai_logo.webp';
import perplexity from '../../assets/images/icon/perplexity_ai_logo.webp';
import github from '../../assets/images/icon/github_copilot_ai_logo.webp';
import gemini from '../../assets/images/icon/Gemini_ai_logo.webp';

import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';

const TechnologiesPage = ()=>{

    return(
        <>
        <SEO page="technologies" />
        <SchemaGraph
            pageType="technology"
            pageName="Web Development Technologies & Expertise"
            pageDescription="CodeTrios is a web development and digital solutions company in India using modern frontend, backend, database, CMS, cloud, AI, UI/UX, and development technologies to build websites, web applications, ecommerce platforms, and custom software solutions."
            pageUrl="https://www.codetrios.com/technologies"
            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                },
                {
                    name: "Technologies",
                    url: "https://www.codetrios.com/technologies"
                }
            ]}
            itemListName="Technologies Used by CodeTrios"
            itemListDescription="Frontend, backend, database, CMS, cloud, AI, UI/UX, and development technologies used by CodeTrios for web development, web applications, ecommerce, custom software, and digital solutions."
            itemListItems={[
                {
                    name: "React.js",
                    description: "Frontend technology used by CodeTrios for responsive and interactive web applications."
                },
                {
                    name: "Vite",
                    description: "Modern frontend build tool used with React for fast web application development."
                },
                {
                    name: "JavaScript",
                    description: "Core web development technology used for interactive and dynamic web experiences."
                },
                {
                    name: "HTML5",
                    description: "Web markup technology used to build structured websites and web applications."
                },
                {
                    name: "CSS3",
                    description: "Styling technology used to create responsive and accessible web interfaces."
                },
                {
                    name: "Bootstrap",
                    description: "Frontend framework used for responsive website and application interfaces."
                },
                {
                    name: "Tailwind CSS",
                    description: "Utility-first CSS framework used for modern responsive user interfaces."
                },
                {
                    name: "Vue.js",
                    description: "Frontend JavaScript framework used for interactive web applications."
                },
                {
                    name: "React Native",
                    description: "Technology used for cross-platform mobile application development."
                },
                {
                    name: "PHP",
                    description: "Backend programming language used for websites, web applications, and CMS development."
                },
                {
                    name: "Laravel",
                    description: "PHP framework used for scalable web application and backend development."
                },
                {
                    name: "Node.js",
                    description: "JavaScript runtime used for backend development, APIs, and scalable web applications."
                },
                {
                    name: "Express.js",
                    description: "Node.js framework used for API and backend application development."
                },
                {
                    name: "WordPress",
                    description: "CMS platform used by CodeTrios for business websites and customized WordPress solutions."
                },
                {
                    name: "Drupal",
                    description: "CMS platform used for structured content management and enterprise websites."
                },
                {
                    name: "Strapi",
                    description: "Headless CMS used for API-driven web application development."
                },
                {
                    name: "Python",
                    description: "Programming language used for application development, automation, and AI-related solutions."
                },
                {
                    name: "MySQL",
                    description: "Relational database used for websites, web applications, and business software."
                },
                {
                    name: "SQL Server",
                    description: "Relational database platform used for enterprise data management and applications."
                },
                {
                    name: "MongoDB",
                    description: "NoSQL database used for scalable and flexible application data storage."
                },
                {
                    name: "AWS",
                    description: "Cloud platform used for application deployment, hosting, infrastructure, and scalable digital solutions."
                },
                {
                    name: "Google Cloud",
                    description: "Cloud platform used for application hosting, deployment, and scalable infrastructure."
                },
                {
                    name: "Figma",
                    description: "UI/UX design tool used for interface design, wireframes, prototypes, and design systems."
                },
                {
                    name: "GSAP",
                    description: "Animation library used for interactive web animations and motion experiences."
                },
                {
                    name: "Three.js",
                    description: "JavaScript 3D library used for interactive 3D web experiences."
                },
                {
                    name: "Lottie",
                    description: "Animation technology used for lightweight web animations and micro-interactions."
                }
            ]}
        />
        <div className='servicesPage innerPageBg'>
            <div className="innerHeroBanner">
                <NetworkBackground />
                <Container>
                    <Row>
                    <Col>
                        <div className='innerBannerContent'>
                        <div className="tag">Our technologies</div>
                        {/* <h1>Web Design, Development & <span>Digital Solutions</span></h1> */}
                        <h1>Web Development Technologies & Digital Solutions Expertise</h1>
                        <p>CodeTrios is a web development and digital solutions company in India using modern frontend, backend, mobile, CMS, ecommerce, database, cloud, AI, and API technologies to build websites, web applications, ecommerce platforms, custom software, and digital solutions.</p>
                        <div className='actionRow'>
                            <ActionButton />
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className={Style.innerBanner}>
                <Container>
                    <Row>
                        <Col>
                            <div className={Style.content}>
                                <h1>Web Development Technologies & Digital Solutions Expertise</h1>
                                <p>CodeTrios is a web development and digital solutions company in India using modern frontend, backend, mobile, CMS, ecommerce, database, cloud, AI, and API technologies to build websites, web applications, ecommerce platforms, custom software, and digital solutions.</p>
                                <CATButton />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className="ourPlatForm blockPadding">
                <Container>
                    <Row>
                        <Col>
                            <div className="boxContainer">
                                <h2>Frontend Development Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>Front-End Development</h3>
                                        <p>We craft high-performance, interactive, and visually stunning front-end experiences using modern JavaScript frameworks and UI technologies. Our focus is on building interfaces that are fast, responsive, accessible, and aligned with your brand identity. With pixel-perfect precision and smooth user flows, we ensure your customers enjoy an intuitive and seamless digital experience across all devices.</p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={reactVite} alt='Web Development, Web Application Development, Custom Software Development' />
                                            </figure>
                                            <h4>React.js + Vite</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={HTML} alt='' />
                                            </figure>
                                            <h4>HTML5</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={tailwind} alt='' />
                                            </figure>
                                            <h4>Tailwind CSS</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={js} alt='' />
                                            </figure>
                                            <h4>JavaScript</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={bootstrap} alt='' />
                                            </figure>
                                            <h4>Bootstrap</h4>
                                        </div>
                                        
                                        <div className="techLogo">
                                            <figure>
                                                <img src={vue} alt='' />
                                            </figure>
                                            <h4>Vue.js</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={reactNative} alt='' />
                                            </figure>
                                            <h4>React Native</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>AI & Generative AI Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>AI & Generative AI Development</h3>
                                        <p>We integrate modern AI and generative AI technologies into websites, web applications, business workflows, and custom software solutions. Depending on project requirements, our solutions can use AI APIs, conversational AI, content generation, automation, search, and intelligent business workflows. </p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={openAI} alt='' />
                                            </figure>
                                            <h4>OpenAI</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={claude} alt='' />
                                            </figure>
                                            <h4>Claude</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={gemini} alt='' />
                                            </figure>
                                            <h4>Gemini</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={perplexity} alt='' />
                                            </figure>
                                            <h4>Perplexity</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={github} alt='' />
                                            </figure>
                                            <h4>Github Copilot</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>Backend Development Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>Back-End Development</h3>
                                        <p>We deliver secure, scalable, and high-performance backend systems designed to handle complex business logic, heavy loads, and real-time interactions. Our backend architecture ensures speed, reliability, and seamless data processing to support your web and mobile applications.</p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={php} alt='' />
                                            </figure>
                                            <h4>PHP</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={express} alt='' />
                                            </figure>
                                            <h4>Express.js</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={laravel} alt='' />
                                            </figure>
                                            <h4>Laravel</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={drupal} alt='' />
                                            </figure>
                                            <h4>Drupal</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={node} alt='' />
                                            </figure>
                                            <h4>Node.js</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={wordpress} alt='' />
                                            </figure>
                                            <h4>WordPress</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={strapi} alt='' />
                                            </figure>
                                            <h4>Strapi</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={Python} alt='' />
                                            </figure>
                                            <h4>Python</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={zframe} alt='' />
                                            </figure>
                                            <h4>Zend Framework</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>UI/UX Design Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>UI/UX Design & Creative Tools</h3>
                                        <p>CodeTrios uses modern UI/UX and creative design tools to create wireframes, design systems, prototypes, visual assets and user-centered digital experiences.</p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={figma} alt='' />
                                            </figure>
                                            <h4>Figma</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={adobeXD} alt='' />
                                            </figure>
                                            <h4>Adobe XD</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={Illustrator} alt='' />
                                            </figure>
                                            <h4>Illustrator</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={photoshop} alt='' />
                                            </figure>
                                            <h4>Photoshop</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={corelDraw} alt='' />
                                            </figure>
                                            <h4>CorelDraw</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={canva} alt='' />
                                            </figure>
                                            <h4>Canva</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>Animation & Motion Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>Animation, Motion & 3D</h3>
                                        <p>We enhance digital experiences with smooth, engaging, and visually appealing animations. From micro-interactions to full-scale motion graphics, our team uses advanced animation frameworks to bring interfaces and brand stories to life.</p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={gsap} alt='' />
                                            </figure>
                                            <h4>GSAP</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={three} alt='' />
                                            </figure>
                                            <h4>Three.js</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={lottie} alt='' />
                                            </figure>
                                            <h4>LottieFiles</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={anime} alt='' />
                                            </figure>
                                            <h4>Anime.js</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={aos_logo} alt='' />
                                            </figure>
                                            <h4>AOS Animation</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>Cloud & Infrastructure Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>Cloud</h3>
                                        <p>Modern businesses need secure, scalable, and high-performing cloud infrastructure. At CodeTrios, we help organizations migrate, deploy, and manage applications across leading cloud platforms using DevOps best practices. From cloud migration and CI/CD pipelines to containerization and infrastructure automation, we build reliable cloud solutions that improve performance, reduce costs, and support business growth. </p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={aws} alt='' />
                                            </figure>
                                            <h4>AWS</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={gCloud} alt='' />
                                            </figure>
                                            <h4>Google Cloud</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={hostinger} alt='' />
                                            </figure>
                                            <h4>Hostinger</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="boxContainer">
                                <h2>Database Technologies</h2>
                                <div className="boxElem">
                                    <div className="leftArea">
                                        <h3>Database Development</h3>
                                        <p>Our database solutions ensure your applications run smoothly, securely, and efficiently. We architect data structures that scale with your business and support high-speed queries, analytics, and transaction-heavy workloads.</p>
                                    </div>
                                    <div className="rightArea">
                                        <div className="techLogo">
                                            <figure>
                                                <img src={monogoDB} alt='' />
                                            </figure>
                                            <h4>MongoDB</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={mysql} alt='' />
                                            </figure>
                                            <h4>MySQL</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={sql} alt='' />
                                            </figure>
                                            <h4>SQL Server</h4>
                                        </div>
                                        <div className="techLogo">
                                            <figure>
                                                <img src={cloudSql} alt='' />
                                            </figure>
                                            <h4>Google Cloud SQL</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <ProjectCAT />
        </div>
        </>
    )
}

export default TechnologiesPage;