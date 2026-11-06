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
  Wrench,
  Bot,
  Target,
  UsersRound,
  Network,
  Lightbulb,
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

// services data
const serviceData = [
  {
    number : "01",
    title : "Website Design",
    icon : PanelsTopLeft,
    content : "A Website That Makes the Right First Impression. Your website is often the first interaction customers have with your business. We design modern, responsive, and easy-to-navigate websites that communicate your brand clearly and make it simple for visitors to take action. Whether you need a company website, school website, healthcare website, or a professional business website, we focus on creating an experience that works well across devices.",
    link : "/website-design-services",
    services:[
      {
        title: "Business and corporate website design",
        link: "Business and corporate website design",
        altTitle: "Business and corporate website design"
      },
      {
        title: "Responsive and mobile-friendly layouts",
        link: "Responsive and mobile-friendly layouts",
        altTitle: "Responsive and mobile-friendly layouts"
      },
      {
        title: "UI/UX design and wireframing",
        link: "UI/UX design and wireframing",
        altTitle: "UI/UX design and wireframing"
      },
      {
        title: "Landing page design",
        link: "Landing page design",
        altTitle: "Landing page design"
      },
      {
        title: "Website redesign",
        link: "Website redesign",
        altTitle: "Website redesign"
      },
      {
        title: "SEO-friendly page structures",
        link: "SEO-friendly page structures",
        altTitle: "SEO-friendly page structures"
      },
    ]
  },
  {
    number : "02",
    title : "Web Development",
    icon : CodeXml,
    content : "Not every business can work with a ready-made website template. We develop custom websites and web platforms based on your functionality, business requirements, your ideas, and future plans.Our developers work with modern frontend and backend technologies to create websites that are responsive, maintainable, and built for reliable performance.",
    link : "/web-development-services",
    services:[
      {
        title: "Custom website development",
        link: "Custom website development",
        altTitle: "Custom website development"
      },
      {
        title: "React.js frontend development",
        link: "React.js frontend development",
        altTitle: "React.js frontend development"
      },
      {
        title: "PHP and Node.js development",
        link: "PHP and Node.js development",
        altTitle: "PHP and Node.js development"
      },
      {
        title: "WordPress and Drupal development",
        link: "WordPress and Drupal development",
        altTitle: "WordPress and Drupal development"
      },
      {
        title: "API integration and database development",
        link: "API integration and database development",
        altTitle: "API integration and database development"
      },
      {
        title: "Website optimization and technical improvements",
        link: "Website optimization and technical improvements",
        altTitle: "Website optimization and technical improvements"
      },
    ]
  },
  {
    number : "03",
    title : "Ecommerce Development",
    icon : ShoppingCart,
    content : "Planning to sell products online with us? We develop ecommerce websites that make it easier for customers to browse products, place orders, and complete purchases.From product catalogues to payment integrations, we build online stores around your products, customers, and business requirements.",
    link : "/ecommerce-development-services",
    services:[
      {
        title: "Custom ecommerce website development",
        link: "Custom ecommerce website development",
        altTitle: "Custom ecommerce website development"
      },
      {
        title: "Product and category management",
        link: "Product and category management",
        altTitle: "Product and category management"
      },
      {
        title: "Shopping cart and checkout functionality",
        link: "Shopping cart and checkout functionality",
        altTitle: "Shopping cart and checkout functionality"
      },
      {
        title: "Payment gateway integration",
        link: "Payment gateway integration",
        altTitle: "Payment gateway integration"
      },
      {
        title: "Order and inventory management",
        link: "Order and inventory management",
        altTitle: "Order and inventory management"
      },
      {
        title: "Ecommerce website maintenance",
        link: "Ecommerce website maintenance",
        altTitle: "Ecommerce website maintenance"
      },
    ]
  },
  {
    number : "04",
    title : "Web Application Development",
    icon : AppWindow,
    content : "When a regular website is not enough, we build a custom web application can help manage business operations more efficiently. We build browser-based applications for businesses and organizations, including management systems, dashboards, customer portals, and applications that connect different services through APIs.",
    link : "/web-application-development",
    services:[
      {
        title: "Custom business applications",
        link: "Custom business applications",
        altTitle: "Custom business applications"
      },
      {
        title: "Admin panels and dashboards",
        link: "Admin panels and dashboards",
        altTitle: "Admin panels and dashboards"
      },
      {
        title: "Customer and employee portals",
        link: "Customer and employee portals",
        altTitle: "Customer and employee portals"
      },
      {
        title: "School and management systems",
        link: "School and management systems",
        altTitle: "School and management systems"
      },
      {
        title: "SaaS application development",
        link: "SaaS application development",
        altTitle: "SaaS application development"
      },
      {
        title: "API-based application development",
        link: "API-based application development",
        altTitle: "API-based application development"
      },
      {
        title: "Third-party integrations",
        link: "Third-party integrations",
        altTitle: "Third-party integrations"
      },
    ]
  },
  {
    number : "05",
    title : "UI/UX Design",
    icon : Palette,
    content : "A useful digital product should look good, but more importantly, people should know how to use it. We create clear and user-friendly designs that make websites and applications easier to understand and navigate.From the first wireframe to the final interface, our focus is on creating meaningful experiences for your customers.",
    link : "/ui-ux-design-services",
    services:[
      {
        title: "UI/UX design",
        link: "UI/UX design",
        altTitle: "UI/UX design"
      },
      {
        title: "Website interface design",
        link: "Website interface design",
        altTitle: "Website interface design"
      },
      {
        title: "Mobile application interface design",
        link: "Mobile application interface design",
        altTitle: "Mobile application interface design"
      },
      {
        title: "Wireframes and prototypes",
        link: "Wireframes and prototypes",
        altTitle: "Wireframes and prototypes"
      },
      {
        title: "Landing page design",
        link: "Landing page design",
        altTitle: "Landing page design"
      },
      {
        title: "User experience improvements",
        link: "User experience improvements",
        altTitle: "User experience improvements"
      },
    ]
  },
  {
    number : "06",
    title : "CUSTOM SOFTWARE & TECHNOLOGY SOLUTIONS",
    icon : Blocks,
    content : "Sometimes your business needs more than a website, that's why we are here. It needs software that follows specific workflows, connects different systems, or reduces repetitive tasks.We develop custom software and technology solutions based on how your business operates, helping teams manage information, improve processes, and work more efficiently.",
    link : "/custom-software-solutions",
    services:[
      {
        title: "Custom PHP and Node.js development",
        link: "Custom PHP and Node.js development",
        altTitle: "Custom PHP and Node.js development"
      },
      {
        title: "Business process automation",
        link: "Business process automation",
        altTitle: "Business process automation"
      },
      {
        title: "Custom management systems",
        link: "Custom management systems",
        altTitle: "Custom management systems"
      },
      {
        title: "API development and integration",
        link: "API development and integration",
        altTitle: "API development and integration"
      },
      {
        title: "Database design and management",
        link: "Database design and management",
        altTitle: "Database design and management"
      },
      {
        title: "Existing software improvements",
        link: "Existing software improvements",
        altTitle: "Existing software improvements"
      },
      {
        title: "AI-powered workflow solutions",
        link: "AI-powered workflow solutions",
        altTitle: "AI-powered workflow solutions"
      },
    ]
  },
  {
    number : "07",
    title : "ADDITIONAL DIGITAL SERVICES",
    icon : ChartNoAxesCombined,
    content : " Codetrios provide Complete Support Beyond Digital Development. Building a digital product is only one part of the journey. We also help businesses maintain their websites, improve their online visibility, and manage their technology as their needs change. Our additional services are designed to support you after launch and as your business grows.",
    link : "/digital-strategy-consulting",
  },
  {
    number : "08",
    title : "Website Maintenance",
    icon : Wrench,
    content : "Keep your website updated and running smoothly with bug fixes, security updates, backups, performance improvements, and ongoing support.",
    link : "/website-maintenance",
    services:[
      {
        title: "Regular bug fixes and small updates",
        link: "Regular bug fixes and small updates",
        altTitle: "Regular bug fixes and small updates"
      },
      {
        title: "Security updates and monitoring",
        link: "Security updates and monitoring",
        altTitle: "Security updates and monitoring"
      },
      {
        title: "Website backups",
        link: "Website backups",
        altTitle: "Website backups"
      },
      {
        title: "Performance and speed improvements",
        link: "Performance and speed improvements",
        altTitle: "Performance and speed improvements"
      },
      {
        title: "Content updates",
        link: "Content updates",
        altTitle: "Content updates"
      },
      {
        title: "Ongoing technical support",
        link: "Ongoing technical support",
        altTitle: "Ongoing technical support"
      },
    ]
  },
  {
    number : "09",
    title : "Web Hosting & Deployment",
    icon : Server,
    content : "Get help with website hosting, server configuration, domain and DNS setup, deployment, and website migration.",
    link : "/web-hosting-services",
    services:[
      {
        title: "Website hosting setup and management",
        link: "Website hosting setup and management",
        altTitle: "Website hosting setup and management"
      },
      {
        title: "Server configuration and environment setup",
        link: "Server configuration and environment setup",
        altTitle: "Server configuration and environment setup"
      },
      {
        title: "Domain and DNS configuration",
        link: "Domain and DNS configuration",
        altTitle: "Domain and DNS configuration"
      },
      {
        title: "Deployment of websites and applications",
        link: "Deployment of websites and applications",
        altTitle: "Deployment of websites and applications"
      },
      {
        title: "Website migration from one host or server to another",
        link: "Website migration from one host or server to another",
        altTitle: "Website migration from one host or server to another"
      },
      {
        title: "Basic hosting support and troubleshooting",
        link: "Basic hosting support and troubleshooting",
        altTitle: "Basic hosting support and troubleshooting"
      },
    ]
  },
  {
    number : "10",
    title : "SEO & GEO Services",
    icon : Search,
    content : "Improve your website's visibility through technical SEO, useful content, local SEO, and Generative Engine Optimization strategies.",
    link : "/geo-seo-services",
    services:[
      {
        title: "Technical SEO checks and fixes",
        link: "Technical SEO checks and fixes",
        altTitle: "Technical SEO checks and fixes"
      },
      {
        title: "On-page SEO improvements",
        link: "On-page SEO improvements",
        altTitle: "On-page SEO improvements"
      },
      {
        title: "Content structure and internal linking",
        link: "Content structure and internal linking",
        altTitle: "Content structure and internal linking"
      },
      {
        title: "Local SEO for businesses targeting specific areas",
        link: "Local SEO for businesses targeting specific areas",
        altTitle: "Local SEO for businesses targeting specific areas"
      },
      {
        title: "Generative Engine Optimization (GEO) for visibility in AI-powered search experiences",
        link: "Generative Engine Optimization (GEO) for visibility in AI-powered search experiences",
        altTitle: "Generative Engine Optimization (GEO) for visibility in AI-powered search experiences"
      },
      {
        title: "Ongoing SEO recommendations and reporting",
        link: "Ongoing SEO recommendations and reporting",
        altTitle: "Ongoing SEO recommendations and reporting"
      },
    ]
  },
  {
    number : "11",
    title : "AI & Automation",
    icon : Bot,
    content : "Explore practical AI integrations and workflow automation that can help reduce repetitive tasks and improve business efficiency.",
    link : "/ai-automation-services",
    services:[
      {
        title: "AI-powered workflow solutions",
        link: "AI-powered workflow solutions",
        altTitle: "AI-powered workflow solutions"
      },
      {
        title: "Automation of repetitive internal tasks",
        link: "Automation of repetitive internal tasks",
        altTitle: "Automation of repetitive internal tasks"
      },
      {
        title: "AI integrations for enquiry handling, content support, or data processing",
        link: "AI integrations for enquiry handling, content support, or data processing",
        altTitle: "AI integrations for enquiry handling, content support, or data processing"
      },
      {
        title: "AI chatboat",
        link: "AI chatboat",
        altTitle: "AI chatboat"
      },
      {
        title: "Practical AI use cases based on your business needs—not hype",
        link: "Practical AI use cases based on your business needs—not hype",
        altTitle: "Practical AI use cases based on your business needs—not hype"
      },
    ]
  },
]
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "School websites, admission enquiry systems, student portals, ERP solutions, and educational platforms.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, doctor profiles, appointment enquiry systems, and healthcare-related digital platforms.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "Ecommerce & Retail",
    text: "Online stores, product catalogues, shopping platforms, and ecommerce integrations.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate",
    text: "Property websites, project listings, enquiry forms, and property management solutions.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality",
    text: "Hotel and hospitality websites, service listings, booking enquiries, and customer engagement platforms.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing",
    text: "Business websites, product catalogues, enquiry systems, and custom operational software.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "Business websites, MVP development, SaaS platforms, and custom digital products.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & B2B",
    text: "Corporate websites, business portals, custom applications, and digital tools that support business operations.",
    img: technologyImg,
  },
]
// why choose us data
const whyChooseData = [
  {
    icon: Target,
    title: "Business-Focused Approach",
    description:
      "We understand your requirements before suggesting technologies or development solutions.",
  },
  {
    icon: UsersRound,
    title: "Experienced Development Team",
    description:
      "Codetrios team brings more than 12 years of combined development experience across different technologies and platforms.",
  },
  {
    icon: Network,
    title: "One Team for Multiple Services",
    description:
      "Get website design, frontend and backend development, CMS solutions, integrations, and maintenance support from one development team.",
  },
  {
    icon: Lightbulb,
    title: "Practical Technology Choices",
    description:
      "Codetrios choose technologies based on your project's requirements rather than using the same approach for every project.",
  },
  {
    icon: Headset,
    title: "Support After Launch",
    description:
      "Codetrios team can continue helping with website updates, maintenance, performance improvements, and new features according to your requirements.",
  },
];
// Our Process Data
const processData = [
  {
    number: "01",
    title: "Discovery",
    icon: SearchCheck,
    description:
      "We discuss your business, goals, target audience, and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    icon: Code2,
    description:
      "We define the features, technology, scope, and development approach.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    icon: Rocket,
    description:
      "We prepare layouts and user experiences that make your website or application easy to use.",
  },
  {
    number: "04",
    title: "Development",
    icon: Headset,
    description:
      "Our team develops the frontend, backend, database, and required integrations.",
  },
  {
    number: "05",
    title: "Testing",
    icon: Headset,
    description:
      "We check functionality, responsiveness, performance, security and compatibility.",
  },
  {
    number: "06",
    title: "Launch",
    icon: Headset,
    description:
      "We deploy the completed project and help make it available to your users.",
  },
  {
    number: "07",
    title: "Ongoing Support",
    icon: Headset,
    description:
      "We help with maintenance, updates, improvements, and future requirements.",
  },
];
//FAQ
const faqs = [
  {
      question: "What services does CodeTrios provide?",
      answer: "CodeTrios provides website design, web development, ecommerce development, web application development, UI/UX design, custom software development, SEO, GEO with AI search result, website maintenance, hosting, and technology consulting."
  },
  {
      question: "How do I choose the right web development service for my business?",
      answer: "It depends on what you want to achieve or where you see your business. A business website is suitable for presenting your services, an ecommerce website is designed for selling products, and a custom web application is useful when you need specific functionality or business workflows."
  },
  {
      question: "Does CodeTrios develop custom websites?",
      answer: "Yes. We develop custom websites based on your business requirements, design preferences, content, and required functionality."
  },
  {
      question: "Does CodeTrios provide web development services in Faridabad and Delhi NCR?",
      answer: "Yes. CodeTrios is based in Faridabad, Haryana, and provides website design, web development, and digital technology services to businesses in Faridabad, Delhi NCR, and other locations."
  },
  {
      question: "Can you develop websites using React.js and Node.js?",
      answer: "Yes. We work with React.js for frontend development and Node.js for backend development, along with databases and APIs, depending on project requirements."
  },
  {
      question: "Do you work with WordPress and Drupal?",
      answer: "Yes. We provide CMS development using WordPress and Drupal, including custom themes, functionality, integrations, and website improvements."
  },
  {
      question: "Can you redesign or improve an existing website?",
      answer: "Yes. We can help redesign existing websites, improve their performance, add new features, fix technical issues, and improve their overall user experience."
  },
  {
      question: "Do you provide website maintenance after development?",
      answer: "Yes. We offer ongoing website maintenance that can include software updates, security improvements, backups, bug fixes, performance optimization, and content updates."
  },
  {
      question: "How much does website development cost?",
      answer: "The cost depends on the type of website, design requirements, features, integrations, content management system, and project complexity. We discuss your requirements before providing a project estimate."
  },
  {
      question: "How can I get started a website with CodeTrios?",
      answer: "You can contact us through our website, email, or phone. Share your project idea and requirements, and our team will help you understand the next steps."
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
                {/* <h1>Web Design, Development & <span>Digital Solutions</span></h1> */}
                <h1>Digital Solutions That Help Your <span>Business.</span></h1>
                <p>Need a website, a custom application, or a better way to manage your business online? CodeTrios helps turn your requirements into practical digital solutions. We provide website design, web development, ecommerce development, web applications, custom software, and digital technology services for businesses in India and beyond. From a simple business website to a complex web platform, we focus on building solutions that are easy to use, reliable, and ready to grow with your business.</p>
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
                  <h2>The Right Digital Services for <span>Every Stage</span> of Your <span>Business.</span></h2>
                </div>
                <div className='secDetail'>
                  <p>Every business needs something new & different from technology. Some need a professional website to reach more customers, while others need custom software to simplify everyday work.At CodeTrios, we bring design, development, and technology together to help businesses solve these challenges. Our services cover the complete journey, from planning and design to development, launch, and ongoing support.</p>
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
                        {item.services?.length > 0 && (
                          <ul>
                            {item.services.map((itemList) => (
                              <li key={itemList.link}>
                                <Link
                                  to={itemList.link}
                                  title={itemList.altTitle}
                                >
                                  {itemList.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
                    <h2>Digital Solutions for Multiple & Different <span>Industries</span></h2>
                    <p>Every industry has its own way of working. We partner with businesses and organizations to build websites and applications that fit their day-to-day needs—not the other way around.</p>
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
                        {/* <h2>Digital Solutions Built Around Your {" "}<span>Goals</span></h2> */}
                        <h2>Need Heading</h2>
                        <p>More Than Development. A Team That Understands Your Goals. Finding a best development partner is about more than choosing technologies. You need a team that listens, understands your requirements, and cares about the final result with your requirement and new technology .</p>
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