import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
import '../../AboutusNew/Aboutus.css';
//icon
import {
  BriefcaseBusiness,
  MonitorSmartphone,
  RefreshCw,
  PanelsTopLeft,
  ShoppingCart,
  PenTool,
  Building2,
  Store,
  Images,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  MousePointerClick,
  Blocks,
  ArrowUpRight,
  Stethoscope,
  Hotel,
  Factory,
  Rocket,
  Code2,
  Atom,
  Users,
  Palette,
  Smartphone,
  LayoutTemplate,
  SearchCheck,
  SlidersHorizontal,
  LifeBuoy,
  Sparkles,UtensilsCrossed
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
import foodRestaurantsImg from '../../../assets/images/food-restaurants-img.webp';
import technologyImg from '../../../assets/images/technology-img.jpg';
const Carousel = CarouselImport.default ?? CarouselImport;

//website Design Services data
const websiteDesignServices = [
  { 
    title: "Business Website Design", 
    content: "Professional websites that showcase your services, build trust and generate enquiries.",
    icon: BriefcaseBusiness, 
  },
  { 
    title: "Responsive Website Design", 
    content: "Mobile-friendly designs that work smoothly across smartphones, tablets and desktops.",
    icon: MonitorSmartphone 
  },
  { 
    title: "Website Redesign", 
    content: "Modernise your existing website with better layouts, navigation and user experience.",
    icon: RefreshCw 
  },
  { 
    title: "Landing Page Design", 
    content: "Engaging landing pages designed to promote services, products and campaigns.",
    icon: PanelsTopLeft 
  },
  { 
    title: "Ecommerce Website Design", 
    content: "User-friendly online stores with organised products and smooth shopping experiences.",
    icon: ShoppingCart 
  },
  // { 
  //   title: "UI/UX Website Design", 
  //   content: "Wireframes, user journeys, prototypes and interface designs that make websites easier to navigate and use.",
  //   link: "/",
  //   icon: PenTool 
  // },
];
//websiteTypes data
const websiteTypes = [
  { 
    title: "Corporate Websites", 
    content: "Professional websites that showcase your organisation, services and brand identity.",
    icon: Building2 
  },
  { 
    title: "Small Business Websites", 
    content: "Affordable, modern websites that help small businesses build an online presence.",
    icon: Store 
  },
  { 
    title: "Portfolio Websites", 
    content: "Creative websites that highlight your work, projects, skills and achievements.",
    icon: Images 
  },
  { 
    title: "Ecommerce Websites", 
    content: "Online stores designed for easy product browsing and smooth shopping experiences.",
    icon: ShoppingBag 
  },
  { 
    title: "Educational Websites", 
    content: "Informative websites for schools, colleges and educational institutions.",
    icon: GraduationCap 
  },
  { 
    title: "Healthcare Websites", 
    content: "User-friendly websites for hospitals, clinics and healthcare professionals.",
    icon: HeartPulse 
  },
  { 
    title: "Landing Pages", 
    content: "Focused web pages designed to promote products, services and campaigns.",
    icon: MousePointerClick 
  },
  { 
    title: "CMS-Based Websites",
    content: "Easy-to-manage websites that let you update content without technical knowledge.",
    icon: Blocks 
  },
];
// why choose us data
const whyChooseData = [
  {
    icon: Palette,
    title: "Designs Tailored to Your Business",
    description:
      "Every business is different. We create website designs that reflect your brand, services, users and business objectives.",
  },
  {
    icon: Users,
    title: "User-Friendly Experience",
    description:
      "We focus on clear layouts, smooth navigation and easy-to-find information to help visitors explore your website easily.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description:
      "Your website will be designed to provide a consistent browsing experience across desktops, tablets and smartphones.",
  },
  {
    icon: LayoutTemplate,
    title: "Modern & Professional Layouts",
    description:
      "We use clean layouts, balanced colours, readable typography and engaging visual elements to create a professional impression according to your business.",
  },
  {
    icon: SearchCheck,
    title: "SEO-Friendly Website Structure",
    description:
      "We consider heading hierarchy, page structure, content readability and other SEO fundamentals while designing your website.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Design",
    description:
      "We strategically place contact forms, enquiry buttons and calls to action to encourage visitors to connect with your business.",
  },
  {
    icon: SlidersHorizontal,
    title: "Easy-to-Manage Websites",
    description:
      "We design websites with practical content management options, making it easier to update pages, images and website information.",
  },
  {
    icon: LifeBuoy,
    title: "Complete Design & Development Support",
    description:
      "From initial design concepts to website launch, our team can assist with UI/UX, website development, testing and ongoing improvements.",
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Understanding Your Requirements",
    description:
      "We understand your business, target audience, goals and design expectations.",
  },
  {
    number: "02",
    title: "Research & Planning",
    description:
      "We research your industry, competitors and users to plan the website structure and user journey.",
  },
  {
    number: "03",
    title: "Wireframing & Layout Planning",
    description:
      "We create wireframes and page layouts to organise content, navigation and important website elements.",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "We design attractive, intuitive and user-friendly interfaces that match your brand identity.",
  },
  {
    number: "05",
    title: "Responsive Design",
    description:
      "We adapt the designs for mobile phones, tablets and desktops to ensure a consistent experience across devices.",
  },
  {
    number: "06",
    title: "Design Review & Finalisation",
    description:
      "We review the designs, incorporate your feedback and finalise the approved layouts for development.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education & E-Learning",
    text: "Modern website designs for schools, colleges, coaching institutes and online learning platforms.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare & Medical",
    text: "Professional website designs for hospitals, clinics, diagnostic centres and healthcare professionals.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Attractive online store designs with organised product displays, intuitive navigation and smooth shopping experiences.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Property listing websites, builder websites and real estate designs that showcase projects and properties effectively.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality & Tourism",
    text: "Engaging website designs for hotels, resorts, travel agencies and tourism businesses.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: UtensilsCrossed,
    title: "Food & Restaurants",
    text: "Creative website designs for restaurants, cafes, bakeries and food businesses with menus and enquiry options.",
    img: foodRestaurantsImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups & Small Businesses",
    text: "Modern, affordable and scalable website designs that help new businesses establish their online presence.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Professional corporate websites for IT companies, technology businesses, agencies and service providers.",
    img: technologyImg,
  },
]
//technology Data
const technologyGroups = [
  {
    title: "Design & Creative Tools",
    icon: PenTool,
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  {
    title: "CMS & Website Platforms",
    icon: PanelsTopLeft,
    technologies: ["WordPress", "Elementor", "Shopify"],
  },
  {
    title: "Frontend Technologies",
    icon: Code2,
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery",  "Sass / SCSS",],
  },
  {
    title: "Frontend Frameworks & Libraries",
    icon: Atom,
    technologies: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Material UI", "GSAP"],
  },
  {
    title: "AI-Assisted Design Tools",
    icon: Sparkles,
    technologies: ["AI-Assisted Design", "AI Website Design Tools", "AI Visual Creation", "AI Design Prototyping"],
  },
];
//FAQ data
const faqs = [
  {
      question: "How much does website design cost in India?",
      answer: "Website design costs depend on the number of pages, design requirements, functionality and technology used. Contact CodeTrios for a quotation based on your project."
  },
  {
      question: "How long does it take to design and develop a website?",
      answer: "A basic business website may take around 1–3 weeks, while larger or more complex projects may require additional time."
  },
  {
      question: "Will my website work on mobile phones?",
      answer: "Yes. We focus on responsive website design so your website can adapt to mobile phones, tablets and desktop screens."
  },
  {
      question: "Do you provide WordPress website design services?",
      answer: "Yes. We develop WordPress websites using custom themes, Elementor and other suitable tools based on your requirements."
  },
  {
      question: "Can you redesign my existing website?",
      answer: "Yes. We can redesign existing websites to improve their appearance, navigation, responsiveness, performance and user experience."
  },
  {
      question: "Will my website be SEO-friendly?",
      answer: "We follow SEO-friendly development practices, including proper page structure, metadata, responsive layouts and performance optimisation. Ongoing SEO services can also be discussed separately."
  },
  {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes. We provide website maintenance and support, including content updates, bug fixes, technical assistance and other maintenance requirements."
  },
  {
      question: "Do you provide website design services outside Delhi NCR?",
      answer: "Yes. CodeTrios works with businesses and organisations across Delhi NCR and other locations in India."
  }
];

//related Services data
const relatedServices = [
  { 
    title: "Web Development", 
    content: "Custom, responsive and scalable websites built with modern frontend and backend technologies.",
    link: "/web-development-services",
  },
  { 
    title: "Ecommerce Development", 
    content: "Feature-rich online stores with product management, secure payments and seamless shopping experiences.",
    link: "/ecommerce-development-services",
  },
  { 
    title: "UI/UX Design", 
    content: "Creative UI/UX, graphic and interface design that strengthens your brand identity.",
    link: "/ui-ux-design-services",
  },
  { 
    title: "SEO & GEO Services", 
    content: "Improve Google rankings and AI search visibility through SEO, content optimisation and Generative Engine Optimisation.",
    link: "/geo-seo-services",
  },
];


export default function WebsiteDesignService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="website-design-services" />
      <SchemaGraph
          pageType="service"
          pageName="Website Design Company in India"
          pageDescription="CodeTrios provides website design services in India, creating responsive, user-friendly, SEO-friendly, and conversion-focused websites for businesses, startups, organizations, and growing brands."
          pageUrl="https://www.codetrios.com/website-design-services"
          serviceName="Website Design Services"
          serviceDescription="Website design services in India for businesses, startups, organizations, and growing brands."
          serviceType="Website Design"
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
                  name: "Website Design Services",
                  url: "https://www.codetrios.com/website-design-services"
              }
          ]}
          faqs={faqs}
      />
      <div className='servicesPage innerPageBg allService'>
        {/* Hero Banner Section */}
        <div className="innerHeroBanner" aria-labelledby="website-design-page-title">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">Our Website Design Services</div>
                  <h1 id="website-design-page-title">Website Design <br/>Company in <span>India</span></h1>
                  <p>At CodeTrios, we design modern, responsive and user-friendly websites that help businesses build credibility, connect with their audience and grow online.We provide professional website design and development services in Delhi NCR and across India, creating websites that combine attractive design, smooth performance, easy navigation and SEO-friendly structure.</p>
                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Website Design Services Section  */}
        <div className='weAreBlock blockPadding' aria-labelledby="website-design-services-title">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">WHAT WE DESIGN</div>
                    <h2 id="website-design-services-title">Website Design Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>At CodeTrios, we create modern, responsive and user-friendly website designs that reflect your brand and support your business growth. From business websites to ecommerce stores, we focus on attractive layouts, easy navigation, mobile-friendly experiences and SEO-friendly structures.</p>
                    <p>Whether you need a new website or want to redesign an existing one, our goal is to create a digital experience that engages visitors and turns them into potential customers.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {websiteDesignServices.map((item, index) =>{
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
        {/* Website Type */}
        <div className='service-block-2 border-block blockPadding' aria-labelledby="website-types-title">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">Types of Websites We Design</div>
                    <h2 id="website-types-title">Website Design Solutions <br/>for <span>Every Business</span></h2>
                    <p className='halfWidth'>Every business has different goals and audiences. At CodeTrios, we design websites that match your requirements, business, brand identity and business objectives.</p>
                  </div>
                  <div className="benefitGrid">
                    {websiteTypes.map((item, index) =>{
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
        {/* Why businesses choose Section */}
        <div className='whyChooseUs block-mg-top' aria-labelledby="why-choose-codetrios-title">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">WHY CHOOSE CODETRIOS</div>
                        <h2 id="why-choose-codetrios-title">Why Choose CodeTrios for <span>Website Design</span> Services?</h2>
                        <p>At CodeTrios, we design websites that combine attractive visuals, smooth navigation and practical functionality. Our goal is to create a professional online presence that builds trust, engages visitors and supports your business growth.</p>
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
        {/* Our Process Section */}
        <div className='services_process blockPadding' aria-labelledby="website-design-process-title"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">OUR WORKING PROCESS</div>
                      <h2 id="website-design-process-title">Our Website Design <span>Process</span></h2>
                      <p>We follow a structured process to make sure every website is planned, designed and developed with care.</p>
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

        {/* website design Technologies & Tools  */}
        <div className='technologyStack block-mg-top' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technologies & Tools</div>
                    <h2 id="technology-expertise-title">Modern Website Design <span> Technologies & Tools</span> We Work With</h2>
                    <p>We use modern design tools and frontend technologies to create attractive, responsive and user-friendly website experiences. We choose the right tools and technologies based on your design requirements, brand identity and website goals.</p>
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

        {/* Industries Section */}
        <div className='services_industries blockPadding block-mg-top' aria-labelledby="industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">INDUSTRIES WE SERVE</div>
                      <h2 id="industries-heading">Website Design for <br/><span>Different Industries</span></h2>
                      <p>CodeTrios provides professional website design services for businesses across different industries. We create user-friendly and responsive website designs that reflect each industry's identity, users and business goals.</p>
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
                              <img src={item.img} alt={`${item.title} website design solutions by CodeTrios`} loading="lazy" decoding="async" width="400" height="480"/>
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
        <div className='related-services blockPadding ' aria-labelledby="related-services-title">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="related-services-title">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="website-design-faq-title">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="website-design-faq-title">Questions About Our <span>Website Design Services</span></h2>
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
        <ProjectCAT sectionId="website-design-cta-title" tagId="website-design-cta-title" />
      </div>
    </>
  )
}