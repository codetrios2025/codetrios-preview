import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {BriefcaseBusiness,RefreshCw,ShoppingCart,Building2,GraduationCap,ArrowUpRight,Stethoscope,Hotel,Factory,Monitor,Settings,
  Rocket,Cpu,Layers,Gauge,Code2,Database,Wrench,FileText,ShieldCheck,DatabaseBackup,Bug,Server,Sparkles, ShieldAlert,FileCode2,
  Blocks,Activity,SlidersHorizontal,LifeBuoy,CloudUpload} from "lucide-react";
//componetnts
import NetworkBackground from '../../UI/NetworkBackground';
import SEO from '../../SEO/websiteMeta';
import SchemaGraph from '../../SEO/Schema/SchemaGraph';
import ActionButton from '../../ActionButton/ActionButton';
import ProjectCAT from '../../ActionButton/ProjectCAT';

//Images
import eduImg from '../../../assets/images/edu-img.jpg';
import healthcareImg from '../../../assets/images/healthcare-img.jpg';
import ecomImg from '../../../assets/images/ecom-img.jpg';
import estateImg from '../../../assets/images/estate-img.jpg';
import hospitalityImg from '../../../assets/images/hospitality-img.jpg';
import manufacturingImg from '../../../assets/images/manufacturing-img.jpg'; 
import startupsImg from '../../../assets/images/startups-img.jpg';
import technologyImg from '../../../assets/images/technology-img.jpg';
const Carousel = CarouselImport.default ?? CarouselImport;

//Website Maintenance Services data
const MaintenanceServicesData = [
  {
    title: "Website Updates & Maintenance",
    content:
      "Keep your website updated with regular content changes, page updates, image replacements, new sections and functionality improvements.",
    icon: RefreshCw,
  },
  {
    title: "Website Security Maintenance",
    content:
      "Improve website security through software updates, security checks, SSL configuration and essential protection measures.",
    icon: ShieldCheck,
  },
  {
    title: "Website Backup & Recovery",
    content:
      "Configure regular website and database backups to help protect important website data and support recovery when needed.",
    icon: DatabaseBackup,
  },
  {
    title: "Website Speed & Performance Optimisation",
    content:
      "Improve website performance by reviewing page loading speed, images, caching, scripts and other performance-related issues.",
    icon: Gauge,
  },
  {
    title: "Bug Fixing & Technical Support",
    content:
      "Identify and resolve website errors, broken links, layout issues, form problems, API errors and other technical difficulties.",
    icon: Bug,
  },
  {
    title: "CMS Maintenance",
    content:
      "Maintain WordPress, Drupal and other CMS-based websites through updates, plugin management, content changes and technical improvements.",
    icon: Layers,
  },
  {
    title: "Database & Server Maintenance",
    content:
      "Assist with database optimisation, server configuration, hosting-related troubleshooting and website deployment issues.",
    icon: Server,
  },
  {
    title: "Website Redesign & Feature Enhancements",
    content:
      "Improve existing websites with updated layouts, new functionality, additional pages and user experience enhancements.",
    icon: Sparkles,
  },
];
//Website Maintenance type plan data
const MaintenanceTypesPlans = [
  {
    title: "Basic Website Maintenance",
    content:
      "Suitable for small business websites and simple informational websites.",
    icon: Building2,
    offer: [
      "Basic website updates",
      "Text and image changes",
      "Broken link checks",
      "Basic technical troubleshooting",
      "Periodic website checks",
    ],
  },
  {
    title: "Standard Website Maintenance",
    content: "Suitable for growing businesses and CMS-based websites.",
    icon: Layers,
    offer: [
      "Regular website and CMS updates",
      "Plugin and theme maintenance",
      "Website backups",
      "Bug fixing and technical support",
      "Performance checks",
      "Content updates",
    ],
  },
  {
    title: "Advanced Website Maintenance",
    content:
      "Suitable for e-commerce websites, portals and custom web applications.",
    icon: ShieldAlert,
    offer: [
      "Advanced technical maintenance",
      "Database and server checks",
      "Security and performance optimisation",
      "API and integration troubleshooting",
      "Feature enhancements",
      "Priority support as agreed",
    ],
  },
];
//Website Maintenance Types data
const TypeWebMaintainData = [
  {
    title: "WordPress Websites",
    content:
      "Theme and plugin updates, Elementor changes, content management, bug fixing and performance improvements.",
    icon: FileCode2,
  },
  {
    title: "Drupal Websites",
    content:
      "Core and module updates, content changes, configuration support, database troubleshooting and technical maintenance.",
    icon: Blocks,
  },
  {
    title: "E-commerce Websites",
    content:
      "Product updates, checkout troubleshooting, payment integration checks and order-related functionality support.",
    icon: ShoppingCart,
  },
  {
    title: "React & Node.js Websites",
    content:
      "Frontend updates, backend troubleshooting, API maintenance, dependency updates and application improvements.",
    icon: Cpu,
  },
  {
    title: "PHP & Custom CMS Websites",
    content:
      "Custom functionality maintenance, database support, bug fixing and server-related troubleshooting.",
    icon: Code2,
  },
  {
    title: "Business & Corporate Websites",
    content:
      "Regular content updates, website improvements, contact form checks and technical support.",
    icon: Building2,
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Layers,
    title: "Support for Multiple Technologies",
    description:
      "We maintain websites built with WordPress, Drupal, React, Node.js, PHP and custom CMS platforms.",
  },
  {
    icon: Activity,
    title: "Proactive Website Maintenance",
    description:
      "We help identify technical issues and maintenance requirements before they create bigger problems.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Focused Approach",
    description:
      "We assist with software updates, SSL configuration, backups and essential website security improvements.",
  },
  {
    icon: Gauge,
    title: "Performance Optimisation",
    description:
      "We work on website speed, database efficiency, image optimisation and other performance-related improvements.",
  },
  {
    icon: Wrench,
    title: "Quick Technical Troubleshooting",
    description:
      "We help resolve website errors, broken functionality, form issues and other technical problems.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Maintenance Support",
    description:
      "Our maintenance services can be planned according to your website's size, technology and support requirements.",
  },
  {
    icon: Sparkles,
    title: "Continuous Website Improvements",
    description:
      "We help update existing pages, add new features and improve website functionality as your business evolves.",
  },
  {
    icon: LifeBuoy,
    title: "Complete Website Support",
    description:
      "From content updates to technical troubleshooting, we provide support for different website maintenance needs.",
  },
];
// technologies we work data
const technologyGroups = [
  {
    title: "Frontend Technologies",
    icon: Monitor,
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend Technologies",
    icon: Settings,
    technologies: ["Node.js", "Express.js", "PHP", "Laravel"],
  },
  {
    title: "CMS Technologies",
    icon: FileText,
    technologies: ["WordPress", "Elementor", "Drupal", "Custom CMS", "Strapi"],
  },
  {
    title: "Database Technologies",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "Development & Deployment",
    icon: CloudUpload,
    technologies: ["REST APIs", "Git", "Hosting Environments"],
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Website Assessment",
    description:
      "We review your website, technology, hosting environment and current maintenance requirements.",
  },
  {
    number: "02",
    title: "Maintenance Planning",
    description:
      "We identify required updates, technical issues, security improvements and performance opportunities.",
  },
  {
    number: "03",
    title: "Website Updates & Fixes",
    description:
      "Our team works on content updates, bug fixes, CMS updates and required functionality improvements.",
  },
  {
    number: "04",
    title: "Security & Performance Checks",
    description:
      "We review essential security settings, website accessibility and performance-related issues.",
  },
  {
    number: "05",
    title: "Testing & Verification",
    description:
      "We test important website pages, forms, links and functionality after making changes.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "We provide continued maintenance and technical assistance according to the agreed service plan.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education & E-Learning",
    text: "Maintenance for school websites, admission portals, educational platforms and student information websites.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare & Medical",
    text: "Technical maintenance for hospital websites, clinic websites, doctor profiles and healthcare portals.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Support for online stores, product catalogues, shopping carts and payment-related functionality.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Updates and maintenance for property listing websites, project pages and real estate portals.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality & Tourism",
    text: "Maintenance for hotel websites, travel platforms, restaurant websites and booking systems.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing & Industrial",
    text: "Website updates, product catalogue maintenance and business enquiry functionality support.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups & Small Businesses",
    text: "Affordable maintenance support to keep business websites updated, functional and professional.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Maintenance for company websites, business portals, service websites and technology platforms.",
    img: technologyImg,
  },
]
//FAQ data
const faqs = [
  {
    question: "What are website maintenance services?",
    answer:
      "Website maintenance services include regular updates, security checks, backups, bug fixing, performance optimisation and technical support to keep a website working properly.",
  },
  {
    question: "Why does my website need regular maintenance?",
    answer:
      "Regular maintenance helps improve website security, prevent technical issues, maintain performance and keep website content accurate and updated.",
  },
  {
    question: "Do you provide WordPress website maintenance?",
    answer:
      "Yes. We provide WordPress maintenance support, including theme and plugin updates, Elementor changes, backups, bug fixing and performance improvements.",
  },
  {
    question: "Can you maintain an existing website developed by another company?",
    answer:
      "Yes. We can assess and maintain existing websites after reviewing their technology, codebase, hosting environment and access requirements.",
  },
  {
    question: "Do you provide Drupal website maintenance?",
    answer:
      "Yes. We provide Drupal maintenance support, including core and module updates, content changes, configuration support and technical troubleshooting.",
  },
  {
    question: "Can you fix website errors and bugs?",
    answer:
      "Yes. We help identify and resolve website errors, broken links, form issues, layout problems, API errors and other technical issues.",
  },
  {
    question: "Do you provide website backup services?",
    answer:
      "We can configure website and database backups based on the website's hosting environment and maintenance requirements.",
  },
  {
    question: "Can you improve my website's loading speed?",
    answer:
      "Yes. We can review website performance and implement suitable improvements related to images, caching, scripts, databases and server configuration.",
  },
  {
    question: "How much do website maintenance services cost?",
    answer:
      "The cost depends on website size, technology, required updates, support frequency and maintenance scope. Contact CodeTrios for a suitable maintenance estimate.",
  },
  {
    question: "Do you offer monthly website maintenance?",
    answer:
      "Yes. Monthly maintenance arrangements can be planned according to your website's requirements and the agreed scope of work.",
  },
  {
    question: "Can you maintain React and Node.js applications?",
    answer:
      "Yes. We provide maintenance support for React and Node.js applications, including frontend updates, backend troubleshooting, API checks and technical improvements.",
  },
  {
    question: "Do you provide emergency website support?",
    answer:
      "Support for urgent website issues can be discussed based on availability, issue complexity and the agreed support arrangement.",
  },
];
//related Services data
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
    title: "Web Hosting Services",
    content:"Reliable hosting, server setup, website deployment and ongoing technical support.",
    link: "/web-hosting-services",
    linkTitle: "Explore Web Hosting Service",
  },
  {
    title: "GEO & SEO Services",
    content:"Improve Google rankings and AI search visibility through SEO, content optimisation and Generative Engine Optimisation.",
    link: "/geo-seo-services",
    linkTitle: "Explore GEO & SEO Services",
  },            
];



export default function WebsiteMaintenanceServices(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="website-maintenance-services" />
      <SchemaGraph
          pageType="service"
          pageName="Website Maintenance Services"
          pageDescription="CodeTrios provides website maintenance services in India, helping businesses maintain secure, updated and functional websites through regular updates, security checks, backups, bug fixing, performance optimisation and technical support."
          pageUrl="https://www.codetrios.com/website-maintenance-services"
          serviceName="Website Maintenance Services"
          serviceDescription="Website maintenance and technical support services including website updates, WordPress and Drupal maintenance, security checks, website backups, bug fixing, performance optimisation, database support and ongoing website improvements."
          serviceType="Website Maintenance Services"
          breadcrumbs={[
              {
                  name: "Home",
                  url: "https://www.codetrios.com/"
              },
              {
                  name: "Services",
                  url: "https://www.codetrios.com/services"
              },
              {
                  name: "Website Maintenance Services",
                  url: "https://www.codetrios.com/website-maintenance-services"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        {/* Website Maintenance Hero banner */}
        <div className="innerHeroBanner" aria-labelledby="website-maintenance-heading">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">WEBSITE MAINTENANCE SERVICES</div>
                  <h1 id='website-maintenance-heading'>Website Maintenance <br/>Services in <span>India</span></h1>
                  <p>Your website needs regular care to remain secure, updated and accessible. CodeTrios provides website maintenance services to help businesses keep their websites running smoothly, fix technical issues, improve performance and maintain a professional online presence.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Our Website Maintenance Services */}
        <div className='weAreBlock blockPadding' aria-labelledby="maintenance-services-heading">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">WHAT WE MAINTAIN</div>
                    <h2 id='maintenance-services-heading'>Website <span>Maintenance</span> & <span>Support</span> Services</h2>
                  </div>
                  <div className='secDetail'>
                    <p>We provide best website maintenance services to help businesses keep their websites updated, secure, fast and running smoothly. A website needs regular attention to maintain its performance, protect important data and deliver a good experience to visitors. At CodeTrios, we take care of the technical work so you can focus on running your business.</p>
                    <p>Our website maintenance services cover everything from regular software and plugin updates to security checks, backups, bug fixes, speed optimisation and content updates. Whether you have a WordPress website, Drupal CMS, e-commerce store or custom-built web application, we provide maintenance support based on your platform and business requirements.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {MaintenanceServicesData.map((item, index) =>{
                    const IconComponent = item.icon;
                    return(
                      <div className="benefitCard" key={index}>
                        <div className="cardTop">
                          <div className="iconWrap">
                            <IconComponent aria-hidden="true" />
                          </div>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Types of Website Maintenance Plans */}
        <div className='service-block-2 border-block blockPadding' aria-labelledby="maintenance-plans-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">FLEXIBLE MAINTENANCE SUPPORT</div>
                    <h2 id="maintenance-plans-heading">Website Maintenance Plans for <br/><span>Different Business</span> Needs</h2>
                    <p className='halfWidth'>Different websites require different levels of maintenance. CodeTrios offers maintenance support based on website size, technology and business requirements.</p>
                  </div>
                  <div className="benefitGrid">
                    {MaintenanceTypesPlans.map((item, index) =>{
                      const IconComponent = item.icon;
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          <div className="cardTop">
                            <div className="iconWrap">
                              <IconComponent aria-hidden="true" />
                            </div>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                          <span className='benefitGo'><ArrowUpRight /></span>
                          <h4>Included Maintenance Services</h4>
                          <ul>
                            {item.offer.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
        {/* Types of Websites We Maintain */}
        <div className='service-block-2 border-block blockPadding' aria-labelledby="maintenance-platforms-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">PLATFORMS WE SUPPORT</div>
                    <h2 id="maintenance-platforms-heading">Types of Websites <span>We Maintain</span></h2>
                    <p className='halfWidth'>We provide maintenance support for different website platforms and technologies.</p>
                  </div>
                  <div className="benefitGrid">
                    {TypeWebMaintainData.map((item, index) =>{
                      const IconComponent = item.icon;
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          <div className="cardTop">
                            <div className="iconWrap">
                              <IconComponent aria-hidden="true" />
                            </div>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                      )
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
        {/* Why businesses choose */}
        <div className='whyChooseUs block-mg-top' aria-labelledby="why-choose-maintenance-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="why-choose-maintenance-heading">Why Choose CodeTrios for <span>Website Maintenance</span> Services?</h2>
                        <p>At CodeTrios, we understand that a website requires continuous attention even after it goes live. Our maintenance approach focuses on website stability, security, performance and long-term usability.</p>
                      </div>
                      <div className="why_features">
                        {whyChooseData.map(({ icon: Icon, title, description }) => (
                          <div className="features_box" key={title}>
                            <div className="features_icon" aria-hidden="true">
                              <Icon size={25} strokeWidth={1.7} />
                            </div>
                            <div className="feature_content">
                              <h3>{title}</h3>
                              <p>{description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Technologies we work */}
        <div className='technologyStack' aria-labelledby="technology-heading">
            <Container>
              <Row>
                <Col>
                  <div className="technology-layout">
                    <div className='sectionHead'>
                      <div className="tag">TECHNOLOGIES & PLATFORMS </div>
                      <h2 id="technology-heading">Website Development <span>Technologies</span> & <span>Platforms</span> We Maintain</h2>
                      <p>Our recommendations are based on business requirements and the technologies suitable for each project.</p>
                      <Link to="/technologies" className="ct-primery-btn ctBtn">Explore Our Technology Expertise <ArrowUpRight className="icon" aria-hidden="true" /></Link>
                    </div>
                    <div className="technology-grid">
                      <ul className="technology-expertise__groups">
                        {technologyGroups.map(({ title, icon: Icon, technologies }) => (
                          <li className="technology-expertise__group" key={title}>
                            <Icon
                              className="technology-expertise__icon"
                              size={44}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
  
                            <div className="technology-expertise__group-content">
                              <h3 className="technology-expertise__group-title">
                                {title}
                              </h3>
  
                              <ul className="technology-expertise__tags">
                                {technologies.map((technology) => (
                                  <li
                                    className="technology-expertise__tag"
                                    key={technology}
                                  >
                                    {technology}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
  
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        {/* Our Process */}
        <div className='services_process blockPadding block-mg-top' aria-labelledby="maintenance-process-heading"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2 id="maintenance-process-heading">Our Website Maintenance <span>Process</span></h2>
                      <p>Our maintenance process focuses on understanding your website, identifying issues and providing the right technical support and give you a best solution for every business and secure. </p>
                  </div>
                  <div className='services_process_grid'>
                    {processData.map((item) => {
                      return (
                        <div className="process_box box-icon-hover" key={item.number}>
                          <span className="number">
                              {item.number}
                          </span>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Industries Section */}
        <div className='services_industries blockPadding' aria-labelledby="maintenance-industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2 id="maintenance-industries-heading">Website Maintenance Services <br/>for <span>Different Industries</span></h2>
                      <p>we provide website maintenance services across a wide range of industries, helping businesses and organisations keep their websites updated, secure, functional and performing smoothly. From corporate websites and e-commerce stores to educational portals, healthcare platforms, real estate websites and business applications, we handle regular updates, security checks, content changes, bug fixes, backups and performance improvements based on each industry's needs.</p>
                  </div>
                  <div className="industries-section">
                    <Carousel
                        autoPlaySpeed={3000}
                        transitionDuration={600}
                        responsive={RelatedServicesSlide}
                        arrows={false}
                        autoPlay={true}
                        pauseOnHover={true}
                        infinite
                        itemClass="industries-carousel-item"
                    >
                      {industriesData.map((item) => {
                        const Icon = item.icon;
                        return (
                          <article className="industry-card" key={item.number}>
                            <div className="industry-card-image">
                              <img src={item.img} alt={`${item.title} industry`} loading="lazy" decoding="async" width="400" height="480"/>
                            </div>
                            <div className="industry-card-overlay" />
                            {/* <span className="industry-card-number">{item.number}</span> */}
                            <div className="industry-card-content">
                              <div className="industry-card-icon"><Icon size={24} strokeWidth={1.7} /></div>
                              <h3>{item.title}</h3>
                              <p>{item.text}</p>
                            </div>
                          </article>
                        );
                      })}
                    </Carousel>
                </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Related Services */}
        <div className='related-services blockPadding' aria-labelledby="related-maintenance-heading">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="related-maintenance-heading">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="maintenance-faq-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="maintenance-faq-heading">Questions About Our <span>Website Maintenance</span></h2>
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
        <ProjectCAT sectionId="maintenance-cta-heading" tagId="maintenance-cta-heading" />
      </div>
    </>
  )
}