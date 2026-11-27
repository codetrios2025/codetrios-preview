import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import {ArrowUpRight} from "lucide-react";
//logo icon
import HTML from '../../assets/images/icon/html_logo.webp';
import css from '../../assets/images/icon/css_logo.webp';
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
import Zframe from '../../assets/images/icon/zframe_logo.webp';
import node from '../../assets/images/icon/node_logo.webp';
import Python from '../../assets/images/icon/paython_logo.webp';
import strapi from '../../assets/images/icon/strapi_logo.webp';
import woocommerce from '../../assets/images/icon/woocommerce-icon.webp';

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
import cPanel from '../../assets/images/icon/cPanel-plesk-logo.webp';

import RESTapi from '../../assets/images/icon/rest-api-icon.webp';
import thirdParty from '../../assets/images/icon/Third-party-icon.webp';
import paymentGat from '../../assets/images/icon/Payment-icon.webp';
import Webhooks from '../../assets/images/icon/webhooks-icon.webp';

import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';


const technologyGroups = [
    {
        id: 'frontend',
        title: 'Frontend Development Technologies',
        subtitle: 'Beautiful websites that are easy to use. ',
        description:
            'The frontend is what visitors see and interact with when they visit your website or use your application. We use modern frontend technologies to create attractive, responsive, and user-friendly experiences that work across mobile phones, tablets, and desktops.',
        technologies: [
            { name: 'React.js + Vite', image: reactVite },
            { name: 'HTML5', image: HTML },
            { name: 'CSS3', image: css },
            { name: 'JavaScript', image: js },
            { name: 'Bootstrap', image: bootstrap },
            { name: 'Tailwind CSS', image: tailwind },
            { name: 'Vue.js', image: vue }
        ],
        applications: [
            'Responsive website development',
            'Frontend web application development',
            'Interactive user interfaces',
            'Custom website development'
        ]
    },
    {
        id: 'backend',
        title: 'Backend Development Technologies',
        subtitle: 'The technology that makes everything work behind the scenes.',
        description:
            'The technology that makes everything work behind the scenes.From login systems and contact forms to dashboards and complex business features, backend development handles the functionality that powers your website or application. We build reliable backend solutions that help your digital products work smoothly.',
        technologies: [
            { name: 'PHP', image: php },
            { name: 'Laravel', image: laravel },
            { name: 'Node.js', image: node },
            { name: 'Express.js', image: express },
            { name: 'Python', image: Python },
            { name: 'Zend Framework', image: Zframe }
        ],
        applications: [
            'Custom backend development',
            'Business application development',
            'Server-side programming',
            'API and database integration'
        ]
    },
    {
        id: 'cms',
        title: 'CMS Development Technologies',
        subtitle: 'Manage your website content without depending on a developer for every update.',
        description:
            'Manage your website content without depending on a developer for every update. A Content Management System (CMS) makes it easy to add pages, update information, upload images, and manage website content. We build and customize CMS websites that give you more control over your online presence.',
        technologies: [
            { name: 'WordPress', image: wordpress },
            { name: 'Drupal', image: drupal },
            { name: 'Strapi', image: strapi },
            { name: 'WooCommerce', image: woocommerce }
        ],
        applications: [
            'Business website development',
            'CMS website development',
            'WooCommerce development',
            'Content management solutions',
            'Custom ecommerce websites'
        ]
    },
    {
        id: 'database',
        title: 'Database Technologies',
        subtitle: 'Keep your business data organized, secure, and easy to access.',
        description:
            'At CodeTrios, we use database technologies that help websites and applications store, retrieve, and manage data efficiently. We choose the right database based on your project requirements and the type of information your application needs to handle.',
        technologies: [
            { name: 'MySQL', image: mysql },
            { name: 'MongoDB', image: monogoDB },
            { name: 'Microsoft SQL Server', image: sql },
            { name: 'Google Cloud SQL', image: cloudSql }
        ],
        applications: [
            'Database architecture',
            'Relational database management',
            'Application data management',
            'Database integration'
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud & Infrastructure Technologies',
        subtitle: 'Keep your website and applications running smoothly, securely, and reliably.',
        description:
            'A great website needs more than good design and development. It also needs reliable hosting, server configuration, and proper infrastructure to perform well. At CodeTrios, we work with hosting platforms and server technologies to deploy websites, manage applications, and keep digital solutions running smoothly.',
        technologies: [
            { name: 'Amazon Web Services (AWS)', image: aws },
            { name: 'Google Cloud', image: gCloud },
            { name: 'Hostinger', image: hostinger },
            { name: 'cPanel & Plesk', image: cPanel }
            
        ],
        applications: [
            'Website and application hosting',
            'Cloud deployment',
            'Application infrastructure',
            'Hosting configuration and management'
        ]
    },
    {
        id: 'uiux',
        title: 'UI/UX & Creative Design Technologies',
        subtitle: 'Designing digital experiences that look great and feel easy to use.',
        description:
            'CodeTrios uses modern UI/UX and creative design tools to create wireframes, design systems, prototypes, visual assets and user-centered digital experiences. From the first wireframe to the final design, we focus on making every screen simple, consistent, and easy for users to understand.',
        technologies: [
            { name: 'Figma', image: figma },
            { name: 'Adobe Photoshop', image: photoshop },
            { name: 'Adobe Illustrator', image: Illustrator },
            { name: 'Adobe XD', image: adobeXD },
            { name: 'Canva', image: canva }
        ],
        applications: [
            'UI/UX design',
            'Website wireframing',
            'Interactive prototypes',
            'Design systems',
            'Creative visual assets'
        ]
    },
    {
        id: 'animation',
        title: 'Animation & Interactive Technologies',
        subtitle: 'Bring your website to life with engaging animations and smooth interactions.',
        description:
            'Bring your website to life with engaging animations and smooth interactions.Animations and motion effects make websites and applications more engaging, interactive, and visually appealing. At CodeTrios, we use modern animation tools and technologies to create smooth transitions, interactive elements, scrolling effects, and visual experiences that capture visitors attention without affecting usability.',
        technologies: [
            { name: 'GSAP', image: gsap },
            { name: 'Three.js', image: three },
            { name: 'Lottie', image: lottie },
            { name: 'Anime.js', image: anime },
            { name: 'AOS', image: aos_logo }
        ],
        applications: [
            'Website animations',
            'Interactive 3D experiences',
            'Motion graphics',
            'Micro-interactions',
            'Animated user interfaces'
        ]
    },
    {
        id: 'ai',
        title: 'AI & Generative AI Technologies',
        subtitle: 'Make your business smarter with AI-powered solutions.',
        description:
            'Artificial Intelligence (AI) is changing how businesses work, communicate, and serve their customers. At CodeTrios, we explore AI and Generative AI technologies to help businesses automate repetitive tasks, create useful content, improve customer interactions, and build smarter digital experiences. We do',
        technologies: [
            { name: 'OpenAI', image: openAI },
            { name: 'Anthropic Claude', image: claude },
            { name: 'Google Gemini', image: gemini },
            { name: 'Perplexity', image: perplexity },
            { name: 'GitHub Copilot', image: github }
        ],
        applications: [
            'AI-powered application features',
            'Conversational AI integration',
            'AI API integration',
            'Content generation workflows',
            'Business process automation'
        ]
    },
    // {
    //     id: 'developer-tools',
    //     title: 'AI-Powered Development Tools',
    //     subtitle: 'AI-Assisted Software Development',
    //     description:
    //         'AI-powered development assistants can support developer productivity, code suggestions, documentation, debugging, and development workflows. CodeTrios uses development tools such as GitHub Copilot where appropriate to assist software development while maintaining developer review, testing, code quality, and project-specific engineering standards.',
    //     technologies: [
    //         { name: 'GitHub Copilot', image: github }
    //     ],
    //     applications: [
    //         'AI-assisted coding',
    //         'Code suggestions',
    //         'Developer productivity',
    //         'Code documentation assistance'
    //     ]
    // },

    {
        id: 'api',
        title: 'API Development & Integration Technologies',
        subtitle: 'Connect your website, applications, and business tools seamlessly.',
        description:
            'At CodeTrios, we develop and integrate APIs that help your digital platforms work together, reduce manual work, and provide a smoother experience for your customers. APIs help different websites, applications, and software systems communicate and share information. Whether you want to connect your website with a payment gateway, integrate third-party services, or exchange data between your website and mobile app, APIs make it possible.',
        technologies: [
            { name: 'REST API', image: RESTapi },
            { name: 'Third-Party API Integration', image: thirdParty  },
            { name: 'Payment Gateway Integration', image: paymentGat },
            { name: 'Webhooks', image: Webhooks },
        ],
        applications: [
            'REST API development',
            'Third-party API integration',
            'Payment gateway integration',
            'Application data exchange',
        ]
    }
];
const relatedServices = [
  {
    title: "Website Design",
    content:"Creative UI/UX, graphic and interface design that strengthens your brand identity.",
    link: "/website-design-services",
    linkTitle: "Explore Website Design Services",
  },
  {
    title: "Web Development",
    content:"Custom, responsive and scalable websites built with modern frontend and backend technologies.",
    link: "/web-development-services",
    linkTitle: "Explore Web Development Services",
  },
  {
    title: "Web Applications",
    content:"Powerful web applications designed to simplify business operations and improve productivity.",
    link: "/web-application-development",
    linkTitle: "Explore Web Application Development",
  },
    {
    title: "eCommerce Solutions",
    content:"Feature-rich online stores with product management, secure payments and seamless shopping experiences.",
    link: "/ecommerce-development-services",
    linkTitle: "Explore Ecommerce Development Services",
  },  
  {
    title: "UI/UX Design",
    content:"Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
    link: "/ui-ux-design-services",
    linkTitle: "Explore UI/UX Design Services",
  },
  {
    title: "Custom Software Development",
    content:"Custom software, API integrations and technology solutions tailored to business needs.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
  {
    title: "AI Automation Solutions",
    content:"AI integrations and intelligent business workflow automation.",
    link: "/ai-automation-solutions",
    linkTitle: "Explore AI Automation Solutions",
  },
          
];
const faqs = [
    {
        question: 'What technologies does CodeTrios use for web development?',
        answer:
            'CodeTrios uses modern web development technologies including React.js, Vue.js, JavaScript, HTML5, CSS3, PHP, Laravel, Node.js, Express.js, MySQL, and MongoDB. The technology stack is selected according to project requirements, performance, security, scalability, and business objectives.'
    },
    {
        question: 'Which frontend technologies does CodeTrios use?',
        answer:
            'Our frontend development technologies include React.js, Vite, Vue.js, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS. These technologies help us create responsive websites and interactive web application interfaces.'
    },
    {
        question: 'Which backend technologies does CodeTrios use?',
        answer:
            'CodeTrios works with PHP, Laravel, Node.js, Express.js, and Python for backend development. These technologies support server-side functionality, application logic, API development, and database integration.'
    },
    {
        question: 'Which technologies are used for ecommerce development?',
        answer:
            'Ecommerce development can use technologies such as React.js, PHP, Node.js, MySQL, MongoDB, WordPress, and WooCommerce. The final technology selection depends on product requirements, store functionality, integrations, and business goals.'
    },
    {
        question: 'Does CodeTrios provide AI-powered application development?',
        answer:
            'Yes. CodeTrios can integrate AI models and APIs into websites, web applications, and business workflows. Depending on project requirements, these integrations can support conversational AI, content generation, intelligent features, and workflow automation.'
    },
    {
        question: 'How does CodeTrios select the right technology for a project?',
        answer:
            'CodeTrios evaluates project requirements, business objectives, application complexity, security, performance, scalability, integration needs, development costs, and long-term maintenance before selecting a suitable technology stack.'
    }
];
const TechnologiesPage = ()=>{
    const schemaItems = [
        ['React.js', 'Frontend JavaScript library for interactive web application interfaces.'],
        ['Vite', 'Frontend build tool used for modern web application development.'],
        ['HTML5', 'Markup language for structured website content.'],
        ['CSS3', 'Styling technology for responsive web interfaces.'],
        ['JavaScript', 'Programming language for interactive web experiences.'],
        ['Bootstrap', 'Frontend framework for responsive interfaces.'],
        ['Tailwind CSS', 'Utility-first CSS framework for web interface styling.'],
        ['Vue.js', 'JavaScript framework for interactive web applications.'],
        ['PHP', 'Server-side programming language for web development.'],
        ['Laravel', 'PHP framework for backend and web application development.'],
        ['Node.js', 'JavaScript runtime for server-side development.'],
        ['Express.js', 'Node.js framework for backend and API development.'],
        ['Python', 'Programming language for application development and automation.'],
        ['WordPress', 'Content management platform for business websites.'],
        ['Drupal', 'Content management system for structured websites.'],
        ['Strapi', 'Headless CMS for API-driven applications.'],
        ['WooCommerce', 'Ecommerce platform built for WordPress.'],
        ['React Native', 'Framework for cross-platform mobile application development.'],
        ['MySQL', 'Relational database management system.'],
        ['MongoDB', 'NoSQL database for flexible application data storage.'],
        ['Microsoft SQL Server', 'Relational database management platform.'],
        ['Google Cloud SQL', 'Managed relational database service on Google Cloud.'],
        ['AWS', 'Cloud platform for application infrastructure and deployment.'],
        ['Google Cloud', 'Cloud computing platform for application infrastructure.'],
        ['Hostinger', 'Web hosting platform.'],
        ['Figma', 'Interface design and prototyping tool.'],
        ['Adobe Photoshop', 'Creative image editing and visual design software.'],
        ['Adobe Illustrator', 'Vector graphic design software.'],
        ['GSAP', 'JavaScript animation library.'],
        ['Three.js', 'JavaScript library for interactive 3D graphics.'],
        ['Lottie', 'Technology for lightweight vector animations.'],
        ['Anime.js', 'JavaScript animation library.'],
        ['AOS', 'Library for scroll-based animation effects.'],
        ['OpenAI', 'AI platform and models for generative AI integrations.'],
        ['Anthropic Claude', 'AI models for generative AI integrations.'],
        ['Google Gemini', 'Google AI models for generative AI integrations.'],
        ['GitHub Copilot', 'AI-assisted software development tool.'],
        ['REST APIs', 'Interfaces for application communication and data exchange.'],
        ['Webhooks', 'Mechanism for event-driven application communication.']
    ];
    const schemaItemList = schemaItems.map(([name, description]) => ({
        name,
        description
    }));
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
            itemListName="Web Development Technologies Used by CodeTrios"
            itemListDescription="Frontend, backend, database, CMS, cloud, AI, UI/UX, and development technologies used by CodeTrios for web development, web applications, ecommerce, custom software, and digital solutions."
            itemListItems={schemaItemList}
        />
        <section  className='servicesPage innerPageBg'>
            <section  className="innerHeroBanner">
                <NetworkBackground />
                <Container>
                    <Row>
                    <Col>
                        <div className='innerBannerContent'>
                        <div className="tag">OUR TECHNOLOGY STACK</div>
                        <h1>Technologies We Use to Build <span>Modern Digital</span> Solutions</h1>
                        <p>At CodeTrios, we work with modern technologies, programming languages, frameworks, and platforms to build secure, scalable, high-performing digital solutions. From business websites and ecommerce platforms to custom web applications and mobile apps, we select the right technology based on your project requirements, business goals, and future growth.</p>
                        <div className='actionRow'>
                            <ActionButton />
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </section >
            <div className='weAreBlock blockPadding' aria-labelledby="technology-stack-heading">
                <Container>
                <Row>
                    <Col>
                    <div className='weAreContent'>
                        <div className='sectionHead'>
                        <div className="tag">INTELLIGENT BUSINESS SOLUTIONS</div>
                        <h2 id='technology-stack-heading'>Web Development Technologies We Use to <span>Build Digital Solutions</span></h2>
                        </div>
                        <div className='secDetail'>
                        <p>We work with a wide range of modern technologies to deliver flexible, efficient, and future-ready digital solutions.</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
            <section  className="ourPlatForm blockPadding" aria-labelledby="technology-stack-heading">
                <Container>
                    <Row>
                        <Col>
                            {technologyGroups.map((group) => (
                                <section className="boxContainer" id={group.id} key={group.id}>
                                     <h2>{group.title}</h2>
                                     <div className="boxElem">
                                        <div className="leftArea">
                                            <h3>{group.subtitle}</h3>
                                            <p>{group.description}</p>
                                            <div className="technologyApplications">
                                                {/* <h4>Applications &amp; Use Cases</h4> */}
                                                <ul>
                                                    {group.applications.map((application) => (
                                                        <li key={application}>
                                                            {application}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="rightArea">
                                            {group.technologies.map((technology)=>(
                                                <div className="techLogo">
                                                    <figure>
                                                        <img
                                                            src={technology.image}
                                                            alt=""
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="70"
                                                            height="70"
                                                        />
                                                    </figure>
                                                    <h4>{technology.name}</h4>
                                                </div>
                                            ))}
                                        </div>
                                     </div>
                                </section>
                            ))}
                            
                        </Col>
                    </Row>
                </Container>
            </section >
            {/* Related Services */}
            <div className='related-services blockPadding' aria-labelledby="technologies-services-heading">
                <Container>
                <Row>
                    <Col>
                    <div className=''>
                        <div className="sectionHead">
                        <div className="tag">Related Services</div>
                        <h2 id="technologies-services-heading">Explore Our Other <span>Digital Services</span></h2>
                        </div>
                        <div className="benefitGrid">
                        {relatedServices.map((item, index) =>{
                            return(
                            <div className="benefitCard" key={index} data-reveal="up">
                                <h3><Link to={item.link}>{item.title}</Link></h3>
                                <p>{item.content}</p>
                                <Link to={item.link} title={item.linkTitle} aria-label={item.linkTitle} className='benefitGo'><ArrowUpRight /></Link>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
            {/* Frequently Asked Questions */}
            <div className='whyChooseUs' aria-labelledby="technologies-faq-heading">
                <Container>
                    <Row>
                    <Col>
                        <div className='why_container'>
                            <div className="sectionHead">
                                <div className="tag">Frequently Asked Questions</div>
                                <h2 id="technologies-faq-heading">Questions About Our <span>Technologies</span></h2>
                            </div>
                            <div className="why_features">
                                <Accordion defaultActiveKey="0" className='faqStyle'>
                                    {faqs.map((item, index) =>{
                                        return(
                                            <Accordion.Item eventKey={index.toString()} key={index}>
                                                <Accordion.Header>{item.question}</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>{item.answer}</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    })}
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
            <ProjectCAT />
        </section >
        </>
    )
}

export default TechnologiesPage;