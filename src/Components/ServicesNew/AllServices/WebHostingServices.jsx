import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {
  BriefcaseBusiness,
  ShoppingCart,
  Building2,
  GraduationCap,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
  Settings2,
  Globe,
  Server,
  Cloud,
  ArrowLeftRight,
  Settings,
  ShieldCheck,
  DatabaseBackup,
  Headset,
  Blocks,
  HeartPulse,
  AppWindow,
  FileCode,
  SlidersHorizontal,
  RefreshCw,
  Layers,
  Gauge,
  CloudCog,
  Terminal,
  LayoutTemplate,
  Code2,
  Globe2, ShoppingBasket
} from "lucide-react";
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

//Hosting Services data
const hostingServicesData = [
  { 
    title: "Website Hosting Setup", 
    content: "Get your website online with the right hosting environment. We assist with hosting selection, account setup, domain connection and website deployment.",
    icon: Globe 
  },
  { 
    title: "Shared Hosting Configuration", 
    content: "Set up and configure shared hosting for business websites, blogs, portfolios and small websites that have moderate traffic requirements.",
    icon: Server 
  },
  { 
    title: "VPS & Cloud Server Setup", 
    content: "Configure VPS and cloud hosting environments for websites and applications that need more control, flexibility and resources.",
    icon: Cloud 
  },
  { 
    title: "Website Migration Services", 
    content: "Move your website from one hosting provider or server to another while taking care of website files, databases, configurations and domain settings.",
    icon: ArrowLeftRight 
  },
  { 
    title: "Server Configuration & Management", 
    content: "Get assistance with server setup, application configuration, database setup, SSL installation and essential server management tasks.",
    icon: Settings 
  },
  { 
    title: "Website Security", 
    content: "Improve website security with SSL configuration, HTTPS setup, security updates and essential protection measures.",
    icon: ShieldCheck 
  },
  { 
    title: "Website Backup & Recovery", 
    content: "Protect your website data through backup configuration and recovery planning to help reduce the impact of accidental data loss or technical issues.",
    icon: DatabaseBackup 
  },
  { 
    title: "Hosting Maintenance & Technical Support", 
    content: "Keep your hosting environment updated with regular checks, troubleshooting, performance monitoring and technical assistance.",
    icon: Headset 
  },
  
];
//Hosting service type data
const hostingServicesType = [
  { 
    title: "Business & Corporate Websites", 
    content: "Reliable hosting for company websites and business pages.",
    icon: Building2 
  },
  { 
    title: "WordPress Websites", 
    content: "Hosting configuration for WordPress websites, blogs and Elementor-based websites.",
    icon: Blocks 
  },
  { 
    title: "E-commerce Websites", 
    content: "Hosting environments configured for online stores, product catalogues and customer transactions.",
    icon: ShoppingBasket 
  },
  { 
    title: "Educational Websites", 
    content: "Hosting support for school websites, admission portals and educational platforms.",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Websites", 
    content: "Hosting configuration for hospital websites, diagnostic centres and healthcare portals.",
    icon: HeartPulse 
  },
  { 
    title: "Web Applications", 
    content: "Server environments for React, Node.js, PHP and database-driven applications.",
    icon: AppWindow 
  },
  { 
    title: "Custom CMS Websites", 
    content: "Hosting configuration for Drupal and other custom content management systems.",
    icon: FileCode 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: SlidersHorizontal,
    title: "Hosting Based on Your Requirements",
    description:"We help select a hosting environment that matches your website's technology, traffic and business needs.",
  },
  {
    icon: Settings2,
    title: "Complete Setup Assistance",
    description:"From domain connection to server configuration, we assist with the technical steps required to launch your website.",
  },
  {
    icon: RefreshCw,
    title: "Website Migration Support",
    description:"Move your existing website with assistance for files, databases, configurations and domain settings.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Focused Configuration",
    description:"We help configure SSL, HTTPS, backups and essential website security measures.",
  },
  {
    icon: Layers,
    title: "Support for Multiple Technologies",
    description:"Our technical experience covers WordPress, Drupal, React, Node.js, PHP and database-driven websites.",
  },
  {
    icon: Gauge,
    title: "Performance & Reliability",
    description:"We help configure hosting environments with performance, stability and website accessibility in mind.",
  },
  {
    icon: Headset,
    title: "Ongoing Technical Assistance",
    description:"Get support for hosting-related issues, configuration changes, updates and troubleshooting.",
  },
 
];
// technologies we work data
const technologiesData = [
  {
    icon: Server ,
    title: "Hosting Environments",
    description: "Shared Hosting, VPS Hosting and Cloud Hosting",
  },
  {
    icon: CloudCog ,
    title: "Hosting Providers",
    description: "Hostinger, GoDaddy and other suitable hosting providers",
  },
  {
    icon: Terminal ,
    title: "Server Technologies",
    description: "Linux, Apache, Nginx and Plesk",
  },
  {
    icon: LayoutTemplate ,
    title: "Website Platforms",
    description: "WordPress, Drupal and Custom CMS",
  },
  {
    icon: Code2 ,
    title: "Development Technologies",
    description: "React.js, Node.js, PHP and MySQL",
  },
  {
    icon: ShieldCheck ,
    title: "Security & Performance",
    description: "SSL, HTTPS, caching, backups and server optimisation",
  },
  {
    icon: Globe2 ,
    title: "Domain Management",
    description: "Domain connection, DNS configuration and nameserver setup",
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:"We review your website type, technology, expected traffic, storage and performance requirements.",
  },
   {
    number: "02",
    title: "Hosting Recommendation",
    description:"We help identify a suitable hosting environment based on your website's technical and business needs.",
  },
   {
    number: "03",
    title: "Server & Domain Configuration",
    description:"We configure hosting, domain DNS, databases, and other required settings.",
  },
   {
    number: "04",
    title: "Website Deployment or Migration",
    description:"We upload and configure your website, or migrate it from your existing hosting environment.",
  },
   {
    number: "05",
    title: "Testing & Performance Checks",
    description:"We check website accessibility, HTTPS, database connectivity and essential website functionality.",
  },
   {
    number: "06",
    title: "Ongoing Support & Maintenance",
    description:"We provide technical assistance and hosting maintenance based on the agreed support requirements.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education & E-Learning",
    text: "Learning platforms, school and college websites, student portals.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare & Medical",
    text: "Hospital websites, appointment systems, patient management solutions.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Online stores, secure payments, product catalogs and shopping experiences.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Property websites, listing portals, lead generation and virtual experiences.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality & Tourism",
    text: "Hotel websites, online booking, guest services and reservation systems.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing & Industrial",
    text: "Business websites, production workflows, automation and operational software.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups & Entrepreneurs",
    text: "MVP development, scalable platforms and digital products for growing businesses.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Corporate websites, custom software, web applications and digital transformation.",
    img: technologyImg,
  },
]
//FAQ data
const faqs = [
  {
      question: "What are web hosting services?",
      answer: "Web hosting services provide the server space and resources needed to store website files and make a website accessible on the internet."
  },
  {
      question: "Which hosting is best for a business website?",
      answer: "Shared hosting may suit smaller websites, while VPS or cloud hosting can be more appropriate for websites with higher traffic or greater resource requirements. The right choice depends on your website."
  },
  {
      question: "Does CodeTrios provide website hosting setup?",
      answer: "Yes. CodeTrios assists with hosting selection, account setup, domain connection, server configuration and website deployment."
  },
  {
      question: "Can you migrate my website to another hosting provider?",
      answer: "Yes. We assist with website migration, including files, databases, configurations and domain settings."
  },
  {
      question: "Do you provide WordPress hosting support?",
      answer: "Yes. We help configure hosting for WordPress websites, including domain setup, SSL, database configuration and website deployment."
  },
  {
      question: "Can you configure VPS and cloud servers?",
      answer: "Yes. We assist with VPS and cloud server setup, application configuration and deployment based on project requirements."
  },
  {
      question: "Do you provide website backup services?",
      answer: "We can help configure website and database backups and establish a recovery approach based on your hosting environment."
  },
  {
      question: "Can you manage an existing hosting account?",
      answer: "Yes. We can assist with server configuration, troubleshooting, maintenance and other hosting-related technical tasks, depending on the hosting provider and access available."
  },
  {
      question: "Do you provide hosting support across India?",
      answer: "Yes. CodeTrios provides remote web hosting setup, configuration, migration and technical support for businesses across India."
  },
]
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
    title: "Custom Software Development",
    content:"Custom software, API integrations and technology solutions tailored to business needs.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
  {
    title: "GEO & SEO Services",
    content:"Improve Google rankings and AI search visibility through SEO, content optimisation and Generative Engine Optimisation.",
    link: "/geo-seo-services",
    linkTitle: "Explore GEO & SEO Services",
  },          
];



export default function WebHostingService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="web-hosting-services" />
      <SchemaGraph
          pageType="service"
          pageName="Web Hosting Services"
          pageDescription="CodeTrios provides web hosting services to help businesses deploy and maintain reliable websites and web applications."
          pageUrl="https://www.codetrios.com/web-hosting-services"
          serviceName="Web Hosting Services"
          serviceDescription="Web hosting services for websites and web applications."
          serviceType="Web Hosting"
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
                  name: "Web Hosting Services",
                  url: "https://www.codetrios.com/web-hosting-services"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        <div className="innerHeroBanner" aria-labelledby="web-hosting-hero-heading">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">WEB HOSTING SERVICES</div>
                  <h1 id="web-hosting-hero-heading">Reliable & Secure Web Hosting Services in India</h1>
                  <p>Your website needs more than good design and development. It also needs reliable hosting, strong security and consistent performance. CodeTrios provides web hosting setup, server configuration, website migration and hosting management services to help businesses keep their websites accessible, secure and running smoothly.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding' aria-labelledby="hosting-services-heading">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">OUR HOSTING SOLUTIONS</div>
                    <h2 id="hosting-services-heading">Website Hosting Services for <span>Businesses</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Content missing</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {hostingServicesData.map((item, index) =>{
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
                      </div>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='service-block-2 border-block blockPadding' aria-labelledby="hosting-website-types-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">HOSTING FOR EVERY WEBSITE TYPE</div>
                    <h2 id="hosting-website-types-heading">Hosting Solutions for <span>Different Websites</span></h2>
                    <p className='halfWidth'>We help configure hosting environments for different types of websites and applications.</p>
                  </div>
                  <div className="benefitGrid">
                    {hostingServicesType.map((item, index) =>{
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="why-choose-hosting-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="why-choose-hosting-heading">Why Choose CodeTrios for <span>Web Hosting</span> Services?</h2>
                        <p>Content missing</p>
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
        <div className='whyChooseUs' aria-labelledby="hosting-technologies-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">HOSTING TECHNOLOGIES & PLATFORMS </div>
                        <h2 id="hosting-technologies-heading">Hosting Technologies, Platforms & Server <span>Environments</span></h2>
                        <p>We work with commonly used hosting environments and website technologies to support different business requirements.</p>
                        <Link to="/technologies" className="ct-primery-btn ctBtn">Explore Our Technology Expertise <ArrowUpRight className="icon" aria-hidden="true" /></Link>
                      </div>
                      <div className="why_features">
                        {technologiesData.map(({ icon: Icon, title, description }) => (
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
        {/* Our Process */}
        <div className='services_process blockPadding' aria-labelledby="hosting-process-heading"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2 id="hosting-process-heading">Our Web Hosting Setup <span>Process</span></h2>
                      <p>Content missing</p>
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
        <div className='services_industries blockPadding' aria-labelledby="hosting-industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2 id="hosting-industries-heading">Industries <span>We Support</span></h2>
                      <p>Our hosting services support websites and applications across different industries:</p>
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
        <div className='related-services blockPadding' aria-labelledby="related-services-heading">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="related-services-heading">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="hosting-faq-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="hosting-faq-heading">Questions About Our <span>Web Hosting</span> Services</h2>
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
        <ProjectCAT sectionId="hosting-cta-title" tagId="hosting-cta-title" />
      </div>
    </>
  )
}