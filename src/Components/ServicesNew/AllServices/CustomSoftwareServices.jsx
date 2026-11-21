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
  Code2,
  ContactRound,
  Network,
  Workflow,
  PlugZap,
  CloudCog,
  RefreshCw,
  LayoutDashboard,
  Hospital,
  UsersRound,
  Kanban,
  CalendarCheck,
  ChartNoAxesCombined,
  Target,
  SlidersHorizontal,
  Layers,
  MousePointerClick,
  Boxes,
  Headset,
  Monitor,
  Server,
  Database,
  Smartphone,
  Blocks, 
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

//Custom Software Services data
const customServicesData = [
  { 
    title: "Custom Business Software Development", 
    content: "We develop business software tailored to your organisation's workflows, helping you manage daily operations, business information, employees and customers from a centralised platform.",
    link: "/",
    icon: Code2 
  },
  { 
    title: "Enterprise Software Development", 
    content: "Build software that supports complex business operations, multiple departments, user roles and organisational workflows.",
    link: "/",
    icon: Building2 
  },
  { 
    title: "CRM & Customer Management Solutions", 
    content: "Manage customer information, enquiries, sales activities and business relationships through customised customer relationship management software.",
    link: "/",
    icon: ContactRound 
  },
  { 
    title: "ERP & Management Software Development", 
    content: "We develop customised management systems to connect business operations, organise information and improve workflow management.",
    link: "/",
    icon: Network 
  },
  { 
    title: "Business Process Automation", 
    content: "Reduce repetitive manual work by automating business activities, notifications, approvals and data processing through customised software.",
    link: "/",
    icon: Workflow 
  },
  { 
    title: "API Development & Third-Party Integration", 
    content: "Connect different software applications and services through reliable API development and integration solutions.",
    link: "/",
    icon: PlugZap 
  },
  { 
    title: "SaaS & Custom Application Development", 
    content: "Develop software products and browser-based platforms designed around your business model, users and application requirements.",
    link: "/",
    icon: CloudCog 
  },
  { 
    title: "Software Modernisation & Maintenance", 
    content: "Improve existing applications through technology upgrades, code improvements, database optimisation and ongoing software maintenance.",
    link: "/",
    icon: RefreshCw 
  },
  
  
];
//Custom Software type data
const customServicesTypes = [
  { 
    title: "Business Management Systems", 
    content: "Manage business activities, employees, customers, tasks and operational information through customised software.",
    link: "/",
    icon: LayoutDashboard 
  },
  { 
    title: "School Management Software", 
    content: "Digital solutions for student records, admissions, attendance, fees, communication and school administration.",
    link: "/",
    icon: GraduationCap 
  },
  { 
    title: "Hospital & Healthcare Management Software", 
    content: "Applications for appointment management, doctor information, patient records and healthcare operations.",
    link: "/",
    icon: Hospital 
  },
  { 
    title: "Inventory & Stock Management Software", 
    content: "Track products, stock levels, purchases, orders and inventory activities through a centralised system.",
    link: "/",
    icon: UsersRound 
  },
  { 
    title: "Customer & Employee Portals", 
    content: "Create secure portals where customers, employees and business partners can access relevant information and services.",
    link: "/",
    icon: UsersRound 
  },
  { 
    title: "Project & Task Management Software", 
    content: "Manage projects, assign tasks, track progress and organise team activities.",
    link: "/",
    icon: Kanban 
  },
  { 
    title: "Booking & Appointment Systems", 
    content: "Develop customised booking platforms for appointments, reservations and service scheduling.",
    link: "/",
    icon: CalendarCheck 
  },
  { 
    title: "Reporting & Analytics Dashboards", 
    content: "Organise business data into useful reports, performance summaries and management dashboards.",
    link: "/",
    icon: ChartNoAxesCombined 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Target,
    title: "Solutions Built Around Your Business",
    description:"We develop software based on your workflows, business requirements and operational challenges.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customised Features & Functionality",
    description:"Get the features your business needs instead of adjusting your processes to fit generic software.",
  },
  {
    icon: Layers,
    title: "Modern Technology Stack",
    description:"We use technologies such as React, Node.js, PHP, MySQL and MongoDB according to project requirements.",
  },
  {
    icon: MousePointerClick,
    title: "Easy-to-Use Interfaces",
    description:"We focus on intuitive application design, organised dashboards and user-friendly workflows.",
  },
  {
    icon: Network,
    title: "Connected Business Systems",
    description:"Integrate APIs, databases, payment gateways and third-party applications to connect your business operations.",
  },
  {
    icon: Boxes,
    title: "Scalable Software Architecture",
    description:"Build applications that can be extended with additional features, users and integrations as your requirements grow.",
  },
  {
    icon: Headset,
    title: "Development & Technical Support",
    description:"Get assistance throughout the development process, deployment and agreed maintenance period.",
  },
 
];
// technologies we work data
const technologyGroups = [
  {
    title: "Frontend Development",
    icon: Monitor,
    technologies: ["React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    title: "Backend Development",
    icon: Server,
    technologies: ["Node.js", "Express.js", "PHP", "REST API Development"],
  },
  {
    title: "Database Management",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
    technologies: ["React Native"],
  },
  {
    title: "CMS & Platform Integration",
    icon: Blocks,
    technologies: ["WordPress", "Drupal"],
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:"Understand your business, existing processes, challenges and software requirements.",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:"Define application features, database structure, user roles, integrations and technical architecture.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:"Create user-friendly interfaces, wireframes and application layouts based on user requirements.",
  },
  {
    number: "04",
    title: "Software Development",
    description:"Develop frontend interfaces, backend functionality, databases and required integrations.",
  },
  {
    number: "05",
    title: "Testing & Optimisation",
    description:"Test application functionality, usability, performance and security before deployment.",
  },
  {
    number: "06",
    title: "Deployment & Launch",
    description:"Deploy the completed application to the selected hosting or server environment.",
  },
  {
    number: "07",
    title: "Maintenance & Support",
    description:"Provide technical assistance, updates, bug fixes and improvements as agreed for the project.",
  },
  
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "School management systems, admission portals and student applications.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital management, appointment booking and patient portals.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Inventory, order management and ecommerce integrations.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property management and lead management systems.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality",
    text: "Hotel websites, online booking, guest services and reservation systems.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Logistics & Transportation",
    text: "Shipment tracking and fleet management applications.",
    img: "Need image",
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "MVP development, SaaS products and custom business applications.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Business applications, CRM and enterprise software.",
    img: technologyImg,
  },
]
//FAQ data
const faqs = [
  {
      question: "What is custom software development?",
      answer: "Custom software development is the process of designing and building software specifically for a business's requirements, workflows and operational needs."
  },
  {
      question: "What types of custom software does CodeTrios develop?",
      answer: "CodeTrios develops business management systems, CRM, ERP, dashboards, customer portals, SaaS applications, workflow automation systems and custom web applications."
  },
  {
      question: "How much does custom software development cost in India?",
      answer: "The cost depends on application features, complexity, technology, integrations, database requirements and development time. Contact CodeTrios to discuss your requirements and receive a project estimate."
  },
  {
      question: "What is the difference between custom software and ready-made software?",
      answer: "Ready-made software provides standard features for multiple businesses, whereas custom software is developed around specific business processes and requirements."
  },
  {
      question: "Can you develop software according to our business requirements?",
      answer: "Yes. We analyse your requirements and develop software with suitable features, workflows, user roles and integrations."
  },
  {
      question: "Can custom software integrate with existing applications?",
      answer: "Yes. We can integrate applications with APIs, payment gateways, databases, CRM, ERP and other third-party platforms where supported."
  },
  {
      question: "Does CodeTrios develop CRM and ERP software?",
      answer: "Yes. We develop customised CRM and ERP-related applications for customer management, business operations, inventory and reporting."
  },
  {
      question: "Can you automate our business processes?",
      answer: "Yes. We can develop workflow automation solutions for approvals, notifications, data processing and repetitive business activities."
  },
  {
      question: "Which technologies are used for custom software development?",
      answer: "We work with React.js, Node.js, Express.js, PHP, MySQL, MongoDB, JavaScript and other technologies based on project requirements."
  },
  {
      question: "How long does custom software development take?",
      answer: "The timeline depends on project size, features, integrations and complexity. We define an estimated development schedule after understanding your requirements."
  },
  {
      question: "Do you provide software maintenance and support?",
      answer: "Yes. We provide technical support, application updates, bug fixes and maintenance according to the agreed project scope."
  },
  {
      question: "Does CodeTrios provide custom software development services across India?",
      answer: "Yes. CodeTrios is based in India and works with businesses in Delhi NCR and other locations across the country."
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
    title: "UI/UX Design",
    content:"Design intuitive, accessible and user-focused interfaces that improve usability, engagement and conversions.",
    link: "/ui-ux-design-services",
    linkTitle: "Explore UI/UX Design Services",
  },
  {
    title: "Web Hosting Service",
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



export default function CustomSoftwareService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="custom-software-solutions" />
      <SchemaGraph
          pageType="service"
          pageName="Custom Software Solutions"
          pageDescription="CodeTrios provides custom software development services in India, building business applications, automation systems, API integrations, enterprise software, and scalable digital solutions."
          pageUrl="https://www.codetrios.com/custom-software-solutions"
          serviceName="Custom Software Solutions"
          serviceDescription="Custom software development services for business applications, automation, API integrations, enterprise systems, software modernization, and scalable digital solutions."
          serviceType="Custom Software Development"
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
                  name: "Custom Software Solutions",
                  url: "https://www.codetrios.com/custom-software-solutions"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        <div className="innerHeroBanner">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">Our Custom Software Services</div>
                  <h1>Custom Software Development Company in India</h1>
                  <p>CodeTrios is a custom software development company in India, helping businesses build digital solutions tailored to their operations, workflows and business goals. We design and develop custom business applications, enterprise software, automation systems, API integrations and scalable technology solutions. Whether you want to automate business operations, develop a management system, connect existing applications or build software from scratch, we create solutions based on Best Custom Software Development Company in Indiayour specific requirements.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding'>
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">WHAT WE DEVELOP</div>
                    <h2>Our Custom Software Development Services</h2>
                  </div>
                  <div className='secDetail'>
                    <p>Need more content</p>
                    <p>We provide custom software development services to help businesses simplify operations, improve productivity and manage their processes through technology.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {customServicesData.map((item, index) =>{
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
        <div className='service-block-2 border-block blockPadding'>
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">TYPES OF SOFTWARE WE DEVELOP</div>
                    <h2>Custom Software Solutions for <br/><span>Different Business</span></h2>
                    <p className='halfWidth'>Content Missing</p>
                  </div>
                  <div className="benefitGrid">
                    {customServicesTypes.map((item, index) =>{
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
        <div className='whyChooseUs block-mg-top'>
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">Why businesses choose CodeTrios</div>
                        <h2>Why Choose CodeTrios for <span>Custom Software</span> Development?</h2>
                        <p>Choosing the right software development partner helps ensure your technology supports your actual business requirements. CodeTrios combines business understanding, modern development technologies and practical software solutions.</p>
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
        <div className='technologyStack block-mg-top' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">TECHNOLOGY STACK</div>
                    <h2>Technologies & Tools for <span>Custom Software</span> Development</h2>
                    <p>We use modern design tools and frontend technologies to create attractive, responsive and user-friendly website experiences.</p>
                    <Link to="/" className="ct-primery-btn ctBtn">Explore Our Technology Expertise <ArrowUpRight className="icon" aria-hidden="true" /></Link>
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
        <div className='services_process blockPadding'> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">Our Process</div>
                      <h2>Our Custom Software Development <span>Process</span></h2>
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
        <div className='services_industries blockPadding' aria-labelledby="industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2>Industries <span>We Serve</span></h2>
                      <p>CodeTrios develops custom software solutions for businesses and organisations across different industries.</p>
                  </div>
                  <div className="industries-section">
                    <Carousel
                        autoPlaySpeed={1500}
                        transitionDuration={500}
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
        <div className='related-services'>
          <Container>
            <Row>
              <Col>
                <div className='inner-bg'>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2>Explore Our Other Digital Services</h2>
                  </div>
                  <div className="benefitGrid">
                    {relatedServices.map((item, index) =>{
                      return(
                        <div className="benefitCard" key={index} data-reveal="up">
                          
                          <h3><Link to={item.link} title={item.link}>{item.title}</Link></h3>
                          <p>{item.content}</p>
                          <span className='benefitGo'><ArrowUpRight /></span>
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
        <div className='whyChooseUs block-mg-top'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2>Questions About Our <span>Custom Software</span> Development</h2>
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
      </div>
    </>
  )
}