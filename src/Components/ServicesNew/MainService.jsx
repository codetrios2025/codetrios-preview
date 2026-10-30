import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './mainservices.css';
//icon
import {
  ArrowRight,
  PanelsTopLeft,
  CodeXml,
  ShoppingCart,
  AppWindow,
  Palette,
  Blocks,
  ChartNoAxesCombined,
  Server,
  Search,
  GraduationCap,
  Stethoscope,
  Building2,
  Hotel,
  Factory,
  Rocket,
  BriefcaseBusiness,
  SearchCheck,
  Code2,
  Headset,
} from "lucide-react";
import Accordion from 'react-bootstrap/Accordion';
//compontnts
import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';
//Images
import eduImg from '../../assets/images/edu-img.jpg';
import healthcareImg from '../../assets/images/healthcare-img.jpg';
import ecomImg from '../../assets/images/ecom-img.jpg';
import estateImg from '../../assets/images/estate-img.jpg';
import hospitalityImg from '../../assets/images/hospitality-img.jpg';
import manufacturingImg from '../../assets/images/manufacturing-img.jpg'; 
import startupsImg from '../../assets/images/startups-img.jpg';
import technologyImg from '../../assets/images/technology-img.jpg';
const Carousel = CarouselImport.default ?? CarouselImport;

//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "Learning platforms, school and college websites, student portals.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, appointment systems, patient management solutions.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Online stores, secure payments, product catalogs and shopping experiences.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property websites, listing portals, lead generation and virtual experiences.",
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
    title: "Manufacturing",
    text: "Business websites, production workflows, automation and operational software.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
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
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Discover",
    icon: SearchCheck,
    description:
      "We understand your business goals, audience, and requirements to create a clear project roadmap.",
  },
  {
    number: "02",
    title: "Design & Build",
    icon: Code2,
    description:
      "We design intuitive interfaces and develop scalable, high-performance digital solutions.",
  },
  {
    number: "03",
    title: "Review & Launch",
    icon: Rocket,
    description:
      "We test, refine, and launch your solution to ensure quality, performance, and reliability.",
  },
  {
    number: "04",
    title: "Support & Maintenance",
    icon: Headset,
    description:
      "We provide ongoing technical support, updates, security monitoring, and performance optimization to keep your digital solutions running smoothly.",
  },
];
// services data
const serviceData = [
  {
    number : "01",
    title : "Website Design",
    icon : PanelsTopLeft,
    content : "CodeTrios is a website design company in India helping businesses, startups, organizations, and growing brands build modern, responsive, and high-performing websites. We combine business strategy, UI/UX design, accessibility, performance, SEO-friendly architecture, and conversion-focused experiences to create websites that support real business goals.",
    link : "/website-design-services"
  },
  {
    number : "02",
    title : "Web Development",
    icon : CodeXml,
    content : "CodeTrios is a web development company in India helping businesses, startups, organizations, and growing brands build fast, secure, and scalable websites and web applications. We combine modern frontend and backend technologies, responsive development, performance optimization, and maintainable architecture to create digital platforms designed around real business requirements.",
    link : "/web-development-services"
  },
  {
    number : "03",
    title : "Ecommerce Development",
    icon : ShoppingCart,
    content : "CodeTrios is an ecommerce development company in India helping businesses build secure, scalable, and conversion-focused online stores. We design and develop ecommerce websites around your products, customers, business model, and growth objectives, with a focus on usability, performance, mobile responsiveness, and reliable ecommerce functionality.",
    link : "/aa"
  },
  {
    number : "04",
    title : "Web Application Development",
    icon : AppWindow,
    content : "CodeTrios is a web application development company in India helping businesses and organizations build secure, scalable, and user-friendly web applications. We develop custom digital platforms that simplify business processes, connect systems, improve productivity, and provide reliable experiences for users across modern devices.",
    link : "/aa"
  },
  {
    number : "05",
    title : "UI/UX Design",
    icon : Palette,
    content : "CodeTrios is a UI/UX design company in India creating intuitive, responsive, and user-focused experiences for websites, web applications, SaaS platforms, and digital products. Our design process combines user research, information architecture, wireframing, prototyping, visual design, and usability to create digital experiences that are easy to understand and use.",
    link : "/aa"
  },
  {
    number : "06",
    title : "Custom Software Development",
    icon : Blocks,
    content : "CodeTrios is a custom software development company in India helping businesses build secure, scalable, and high-performance software solutions tailored to their specific workflows and business goals. From business automation and enterprise applications to API integrations and software modernization, we create technology solutions designed for long-term growth.",
    link : "/aa"
  },
  {
    number : "07",
    title : "Digital Strategy Consulting",
    icon : ChartNoAxesCombined,
    content : "CodeTrios provides digital strategy consulting to help businesses align their digital channels, customer journeys, technology, and growth goals. We use audience research, competitor analysis, channel planning, conversion strategy, and performance measurement to create practical digital roadmaps.",
    link : "/aa"
  },
  {
    number : "08",
    title : "Web Hosting",
    icon : Server,
    content : "CodeTrios provides secure and scalable web hosting services for business websites, ecommerce stores, web applications, and digital platforms. Our hosting services include server configuration, migration, security, performance optimization, backups, monitoring, and technical support.",
    link : "/aa"
  },
  {
    number : "09",
    title : "SEO & GEO Services",
    icon : Search,
    content : "CodeTrios provides SEO and GEO services that improve website discoverability across traditional search and AI-powered search experiences. Our work includes technical SEO, content optimization, structured data, entity signals, internal linking, and Generative Engine Optimization (GEO) for AI search experiences.",
    link : "/aa"
  },
]
//FAQ
const faqs = [
  {
      question: "What digital services does CodeTrios provide?",
      answer: "CodeTrios provides website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services."
  },
  {
      question: "Does CodeTrios provide custom website and software development?",
      answer: "Yes. CodeTrios develops custom websites, applications and software solutions based on business requirements, workflows, integrations and technical needs."
  },
  {
      question: "How much does website development cost in India?",
      answer: "Website development costs vary depending on design complexity, number of pages, custom functionality, CMS requirements, integrations and ongoing support. A project-specific estimate is needed for accurate pricing."
  },
]

export default function ServicesScreen() {
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return (
    <>
    <SEO page="services" />
    <SchemaGraph
        pageType="website"
        pageName="Web Design, Development & Digital Solutions Services"
        pageDescription="CodeTrios provides website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services for businesses and organizations in India."
        pageUrl="https://www.codetrios.com/services"
        breadcrumbs={[
            {
                name: "Home",
                url: "https://www.codetrios.com/"
            },
            {
                name: "Services",
                url: "https://www.codetrios.com/services"
            }
        ]}
    />
    <div className='servicesPage innerPageBg'>
      {/* Banner Section */}
      <div className="innerHeroBanner">
        <NetworkBackground />
        <Container>
          <Row>
            <Col>
              <div className='innerBannerContent'>
                <div className="tag">Our Services</div>
                <h1>Web Design, Development & <span>Digital Solutions</span></h1>
                <p>CodeTrios provides end-to-end web design, development, and digital technology services for businesses, startups, and organizations in India. From website design and ecommerce development to web applications, custom software, UI/UX, digital strategy, hosting, and SEO & GEO, we build scalable digital solutions around your business goals.</p>
                <div className='actionRow'>
                  <ActionButton />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <div className='weAreBlock blockPadding'>
        <Container>
          <Row>
            <Col>
              <div className='weAreContent'>
                <div className='sectionHead'>
                  <div className="tag">What we do</div>
                  <h2>The Right Expertise for Your Next Move</h2>
                </div>
                <div className='secDetail'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='ct_service_container'>
              {serviceData.map((item, index) =>{
                  const IconComponent = item.icon;
                  return(
                    <div className='ct_service_box' key={index}>
                      <div className='ct_service_numver'>{item.number}</div>
                      <div className='ct_service_icon'><IconComponent /></div>
                      <div className='ct_service_content'>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                      </div>
                      <div className='ct_service_link'>
                        <Link to={item.link} title=''><ArrowRight /></Link>
                      </div>
                    </div>
                  )
                })}
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
                    <h2>A clear path from <span>idea to launch</span></h2>
                    <p>CodeTrios designs and develops digital solutions for businesses and organizations across multiple industries. From education portals and healthcare websites to ecommerce platforms and business management systems, we tailor our approach to industry-specific requirements.</p>
                </div>
                <div className='services_process_grid'>
                  {processData.map((item) => {
                    const Icon = item.icon;
  
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
                    <p>CodeTrios designs and develops digital solutions for businesses and organizations across multiple industries. From education portals and healthcare websites to ecommerce platforms and business management systems, we tailor our approach to industry-specific requirements.</p>
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

      {/* Why businesses choose */}
      <div className='whyChooseUs block-mg-top'>
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">Why businesses choose CodeTrios</div>
                        <h2>Digital Solutions Built Around Your {" "}<span>Goals</span></h2>
                        <p>CodeTrios combines strategy, design, development, deployment, hosting, optimization, and technical support to help businesses build and improve their digital presence. Our solutions are planned around your goals, users, technology requirements, and long-term growth.</p>
                      </div>
                      <div className="why_features">
                        
                      </div>
                  </div>
              </Col>
            </Row>
          </Container>
      </div>
      
      {/* Frequently Asked Questions */}
      <div className='whyChooseUs'>
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">Frequently Asked Questions</div>
                        <h2>Questions About Our Web <span>Development & Digital</span> Services</h2>
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

      {/* CAT */}
      <ProjectCAT />
    </div>
    </>
  )
}