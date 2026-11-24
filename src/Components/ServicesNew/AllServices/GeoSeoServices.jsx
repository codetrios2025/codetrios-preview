import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from 'react-bootstrap/Accordion';
import '../mainservices.css';
//icon
import {
  BriefcaseBusiness,ShoppingCart,Building2,ArrowUpRight,Stethoscope,Hotel,Factory,Rocket, Search,
  Sparkles,MessageCircleQuestion,MapPin,Settings,FileText,FileSearch,ExternalLink,MapPinned,Code2,BrainCircuit,MessageSquareText,
  NotebookPen,ClipboardCheck,UtensilsCrossed,GraduationCap,Target,Settings2,Bot,BarChart3,RefreshCw,Truck,Landmark} from "lucide-react";
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
import foodRestaurantsImg from '../../../assets/images/food-restaurants-img.webp';
import logisticsImg from '../../../assets/images/logistics-transportation.webp';
import financeImg from '../../../assets/images/finance-professional-services.webp';
const Carousel = CarouselImport.default ?? CarouselImport;
import {
  SearchConsoleIcon,
  GoogleAnalyticsIcon,
  KeywordPlannerIcon,
  BusinessProfileIcon,
  PageSpeedIcon,
  RichResultsIcon,
} from "../SVGIcon";
//Main SEO, GEO & AEO Services Data
const SeoServicesData = [
  { 
    title: "Search Engine Optimisation (SEO)", 
    content: "Improve your website's visibility on Google and other search engines through technical SEO, keyword research, on-page optimisation and quality content.",
    icon: Search 
  },
  { 
    title: "Generative Engine Optimisation (GEO)", 
    content: "Prepare your website content for AI-powered search experiences by improving content quality, brand information, topical relevance and online discoverability.",
    icon: Sparkles 
  },
  { 
    title: "Answer Engine Optimisation (AEO)", 
    content: "Make your website more useful for question-based searches with clear answers, informative content, structured headings and relevant FAQs.",
    icon: MessageCircleQuestion 
  },
  { 
    title: "Local SEO", 
    content: "Improve your visibility in location-based searches and help nearby customers discover your business, services and contact information.",
    icon: MapPin 
  },
  { 
    title: "Technical SEO", 
    content: "Improve website crawlability, indexing, page performance, mobile usability, website structure and technical health.",
    icon: Settings 
  },
  { 
    title: "Content SEO", 
    content: "Create and optimise website pages, service descriptions and blogs around relevant search topics and customer needs.",
    icon: FileText 
  },
];
//SEO, GEO & AEO Types data
const SEOTypes = [
  { 
    title: "On-Page SEO", 
    content: "Optimise page titles, meta descriptions, headings, URLs, internal links and website content to improve search relevance.",
    icon: FileSearch 
  },
  { 
    title: "Off-Page SEO", 
    content: "Build your website's online authority through relevant backlinks, brand mentions and genuine industry relationships.",
    icon: ExternalLink 
  },
  { 
    title: "Local SEO", 
    content: "Improve local search visibility through Google Business Profile optimisation, business information consistency and location-focused content.",
    icon: MapPinned 
  },
  { 
    title: "Technical SEO", 
    content: "Identify and resolve issues related to indexing, crawling, broken links, redirects, site speed and website structure.",
    icon: Code2 
  },
  { 
    title: "Ecommerce SEO", 
    content: "Optimise product pages, category pages, product descriptions and website navigation to improve online store visibility.",
    icon: ShoppingCart 
  },
  { 
    title: "AI Search Optimisation", 
    content: "Improve how your brand, services and expertise are represented across AI-powered search and discovery experiences.",
    icon: BrainCircuit 
  },
  { 
    title: "Answer Engine Optimisation", 
    content: "Create question-focused content, FAQs and clear informational sections that address common customer queries.",
    icon: MessageSquareText 
  },
  { 
    title: "Content Marketing & Blog SEO",
    content: "Develop useful blogs, articles and website content that attract relevant visitors and answer search intent.",
    icon: NotebookPen 
  },
  { 
    title: "Website SEO Audit",
    content: "Analyse your website's technical health, content quality, keyword targeting and optimisation opportunities.",
    icon: ClipboardCheck 
  },
];
//whyChoose data
const whyChooseData = [
  {
    icon: Target,
    title: "SEO Strategies Based on Your Business",
    description:
      "We create SEO strategies around your industry, services, target users and business.",
  },
  {
    icon: Settings2,
    title: "Technical SEO Expertise",
    description:
      "We work on website structure, page speed, mobile usability, indexing, crawlability and technical issues that can affect search performance.",
  },
  {
    icon: Bot,
    title: "GEO & AI Search Optimisation",
    description:
      "We structure website content to clearly communicate your business, services and expertise, making information easier for search engines and AI-powered platforms to understand.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answer Engine Optimisation (AEO)",
    description:
      "We create clear, question-focused content with useful answers, descriptive headings and relevant FAQs to support answer-based searches.",
  },
  {
    icon: MapPin,
    title: "Local SEO for Better Reach",
    description:
      "We help improve local online visibility through Google Business Profile optimisation, location-focused content and consistent business information.",
  },
  {
    icon: FileText,
    title: "Human-Friendly & SEO-Focused Content",
    description:
      "We develop useful, readable content that addresses customer questions while naturally incorporating relevant search terms.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven SEO Improvements",
    description:
      "We use tools such as Google Analytics and Search Console to monitor website performance, understand search traffic and identify opportunities for improvement.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimisation & Support",
    description:
      "SEO requires ongoing attention. We help with content updates, technical improvements, performance monitoring and strategy adjustments as search trends evolve.",
  },
];
// Tools we use
const toolsData = [
  {
    icon: SearchConsoleIcon ,
    title: "Google Search Console",
    description: "Search performance, indexing and technical monitoring.",
  },
  {
    icon: GoogleAnalyticsIcon ,
    title: "Google Analytics 4",
    description: "Website traffic and visitor behaviour analysis.",
  },
  {
    icon: KeywordPlannerIcon ,
    title: "Google Keyword Planner",
    description: "Keyword research and search demand insights.",
  },
  {
    icon: BusinessProfileIcon ,
    title: "Google Business Profile",
    description: "Local business visibility and information management.",
  },
  {
    icon: PageSpeedIcon ,
    title: "Google PageSpeed Insights",
    description: "Website performance and loading analysis.",
  },
  {
    icon: RichResultsIcon ,
    title: "Google Rich Results Test",
    description: "Structured data validation.",
  },
];

// Our Process Data
const processData = [
  {
    number: "01",
    title: "Website & Business Analysis",
    description:
      "We understand your business, services, target audience, competitors and existing online presence",
  },
  {
    number: "02",
    title: "Keyword & Search Intent Research",
    description:
      "We identify relevant keywords, customer questions, local search terms and topics related to your services.",
  },
  {
    number: "03",
    title: "Technical SEO Audit",
    description:
      "We review website structure, indexing, crawlability, speed, mobile usability and technical issues.",
  },
  {
    number: "04",
    title: "Content & On-Page Optimisation",
    description:
      "We improve website content, headings, metadata, internal links and page structure to match user search intent.",
  },
  {
    number: "05",
    title: "GEO & AEO Optimisation",
    description:
      "We strengthen content clarity, brand information, topical coverage and question-based answers for AI-powered discovery.",
  },
  {
    number: "06",
    title: "Monitoring & Improvement",
    description:
      "We track search performance, keyword visibility, website traffic and other relevant metrics to identify further opportunities.",
  },
];
//industries Data
const industriesData = [
  {
    number : "01",
    icon: GraduationCap,
    title: "Education",
    text: "School and college websites, admission portals, learning platforms and student management systems.",
    img: eduImg,
  },
  {
    number : "02",
    icon: Stethoscope,
    title: "Healthcare",
    text: "Hospital websites, doctor profiles, appointment booking and patient management solutions.",
    img: healthcareImg,
  },
  {
    number : "03",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    text: "Online stores, product catalogues, shopping platforms and payment integrations.",
    img: ecomImg,
  },
  {
    number : "04",
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Property listing websites, real estate portals, project showcases and lead management systems.",
    img: estateImg,
  },
  {
    number : "05",
    icon: Hotel,
    title: "Hospitality & Tourism",
    text: "Hotel websites, travel portals, online booking and reservation systems.",
    img: hospitalityImg,
  },
  {
    number : "06",
    icon: Factory,
    title: "Manufacturing",
    text: "Manufacturing websites, product catalogues, inventory systems and production management solutions.",
    img: manufacturingImg,
  },
  {
    number : "07",
    icon: Rocket,
    title: "Startups",
    text: "Startup websites, MVP development, business applications and scalable digital products.",
    img: startupsImg,
  },
  {
    number : "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Technology",
    text: "Corporate websites, custom software, web applications and digital transformation.",
    img: technologyImg,
  },
  {
    number : "09",
    icon: UtensilsCrossed,
    title: "Food & Restaurants",
    text: "Restaurant websites, digital menus, online ordering and table reservation systems.",
    img: foodRestaurantsImg,
  },
  {
    number : "10",
    icon: Truck,
    title: "Logistics & Transportation",
    text: "Logistics websites, shipment tracking, fleet management and transport applications.",
    img: logisticsImg,
  },
  {
    number : "11",
    icon: Landmark,
    title: "Finance & Consulting",
    text: "Financial service websites, client portals, reporting dashboards and business applications.",
    img: financeImg,
  },
]
//FAQ data
const faqs = [
  {
      question: "What is the difference between SEO, GEO and AEO?",
      answer: "SEO improves visibility in traditional search engines. GEO focuses on discoverability in generative AI search experiences, while AEO focuses on providing clear answers to users' questions across answer-based search platforms."
  },
  {
      question: "Why does my business need SEO services?",
      answer: "SEO helps customers discover your business through relevant online searches. It can improve organic visibility, attract targeted visitors and generate potential business enquiries."
  },
  {
      question: "What are GEO services and how do they help businesses?",
      answer: "GEO services focus on improving your brand's discoverability in AI-powered search experiences. They involve useful content, clear brand information, topical relevance and a technically accessible website."
  },
  {
      question: "What is Answer Engine Optimisation (AEO)?",
      answer: "AEO is the process of organising and improving website content so that search and answer platforms can understand and identify useful responses to customer questions."
  },
  {
      question: "Can SEO help my business rank on Google?",
      answer: "SEO improves your website's eligibility and opportunities to appear for relevant searches. Actual rankings depend on competition, website quality, search intent and many other factors."
  },
  {
      question: "Can GEO help my business appear in ChatGPT and other AI platforms?",
      answer: "GEO strategies can improve your brand's online discoverability through useful content, accurate business information and relevant online references. However, appearance in AI-generated responses cannot be guaranteed."
  },
  {
      question: "How long does SEO take to show results?",
      answer: "SEO is a long-term process. Some technical improvements may show benefits sooner, while meaningful organic visibility and traffic growth can take several months depending on competition and website condition."
  },
  {
      question: "Do you provide local SEO services in Delhi NCR?",
      answer: "Yes. We help businesses improve local online visibility through location-focused content, Google Business Profile optimisation and local SEO practices."
  },
  {
      question: "Do you provide SEO services for WordPress websites?",
      answer: "Yes. We provide SEO optimisation for WordPress websites, including metadata, website structure, content, technical improvements and performance optimisation."
  },
  {
      question: "How do you measure SEO performance?",
      answer: "We monitor relevant metrics such as organic clicks, impressions, keyword visibility, website traffic, indexing status and enquiries using analytical and search performance tools."
  },
  {
      question: "Do you provide SEO audits for existing websites?",
      answer: "Yes. We analyse existing websites to identify technical issues, content gaps, keyword opportunities and areas that need improvement."
  },
  {
      question: "Do you provide SEO and GEO services outside Delhi NCR?",
      answer: "Yes. CodeTrios works with businesses and organisations across Delhi NCR and throughout India."
  },
]

//related Services data
const relatedServices = [
  {
    title: "Website Design",
    content:"Create modern, responsive and user-friendly websites that reflect your brand identity.",
    link: "/website-design-services",
    linkTitle: "Explore Website Design Services",
  },
  {
    title: "Web Development",
    content:"Build fast, secure and scalable websites using modern frontend and backend technologies.",
    link: "/web-development-services",
    linkTitle: "Explore Web Development",
  },
  {
    title: "Ecommerce Development",
    content:"Build online stores with product management, secure payments and shopping integrations.",
    link: "/ecommerce-development-services",
    linkTitle: "Explore Ecommerce Development Services",
  },
  {
    title: "Web Application Development",
    content:"Develop custom business applications, dashboards and digital platforms.",
    link: "/web-application-development",
    linkTitle: "Explore Web Application Development",
  },  
  {
    title: "Custom Software Development",
    content:"Get custom software, API integrations and business automation solutions.",
    link: "/custom-software-solutions",
    linkTitle: "Explore Custom Software Solutions",
  },
  {
    title: "Digital Strategy",
    content:"Develop practical digital strategies to improve your online presence and business growth.",
    link: "/digital-strategy-consulting",
    linkTitle: "Explore Digital Strategy",
  },
  
];


export default function GeoSeoService(){
  const RelatedServicesSlide = {
    superLargeDesktop: {breakpoint: { max: 4000, min: 1499 },items: 4,},
    desktop: {breakpoint: { max: 1499, min: 1024 },items: 3},
    tablet: {breakpoint: { max: 1024, min: 580 },items: 2},
    mobile: {breakpoint: { max: 580, min: 0 },items: 1}
  };
  return(
    <>
      <SEO page="geo-seo-services" />
      <SchemaGraph
        pageType="service"
        pageName="GEO & SEO Services"
        pageDescription="CodeTrios provides SEO, Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) services to help businesses improve organic search performance and discoverability across AI-powered search platforms."
        pageUrl="https://www.codetrios.com/geo-seo-services"
        serviceName="GEO & SEO Services"
        serviceDescription="SEO, GEO and AEO solutions covering technical optimization, keyword research, content optimization, local SEO and AI search discoverability."
        serviceType="Search Engine Optimization, Generative Engine Optimization and Answer Engine Optimization"
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
                name: "GEO & SEO Services",
                url: "https://www.codetrios.com/geo-seo-services"
            }
        ]}
        faqs={faqs}
    />
      <div className='servicesPage innerPageBg allService'>
        <div className="innerHeroBanner" aria-labelledby="geo-seo-hero-heading">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">SEO, GEO & AI Search Optimization</div>
                  <h1 id="seo-geo-hero-heading">SEO, GEO & AEO <br/>Services in <span>India</span></h1>
                  <p>Help your business get discovered online with CodeTrios SEO, GEO and AEO services. We help businesses improve search engine visibility, reach relevant audiences and build a stronger digital presence across traditional and AI-powered search platforms. From technical SEO and content optimisation to local SEO and AI search visibility, we focus on strategies that help customers find your business when they search for products, services and solutions.</p>

                  <div className='actionRow'>
                    <ActionButton />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='weAreBlock blockPadding' aria-labelledby="seo-geo-aeo-services-heading">
          <Container>
            <Row>
              <Col>
                <div className='weAreContent'>
                  <div className='sectionHead'>
                    <div className="tag">OUR SEO & AI SEARCH SERVICES</div>
                    <h2 id="seo-geo-aeo-services-heading">SEO, GEO & AEO Services Built Around Your <span>Business Goals</span></h2>
                  </div>
                  <div className='secDetail'>
                    <p>Online visibility is about more than ranking for keywords. Your website needs to reach the right users, provide useful information and build trust.</p>
                    <p>At CodeTrios, we combine traditional SEO practices with GEO and AEO strategies to help your business become easier to discover across different search experience like : AI tool ,Google search etc.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="benefitGrid">
                  {SeoServicesData.map((item, index) =>{
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
        <div className='service-block-2 border-block blockPadding' aria-labelledby="seo-geo-service-inclusions-heading">
            <Container>
              <Row>
                <Col>
                  <div className='sectionHead'>
                    <div className="tag">SEO & AI SEARCH OPTIMIZATION</div>
                    <h2 id="seo-geo-service-inclusions-heading">SEO, GEO & AEO Solutions <br/>for <span>Every Business</span></h2>
                    <p className='halfWidth'>Different businesses have different Users and search requirements. We develop optimisation strategies based on your industry, services, target locations and business objectives.</p>
                  </div>
                  <div className="benefitGrid">
                    {SEOTypes.map((item, index) =>{
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="why-choose-codetrios-seo-heading">
          <Container>
            <Row>
              <Col>
                  <div className='why_container'>
                      <div className="sectionHead">
                        <div className="tag">Why businesses choose CodeTrios</div>
                        <h2 id="why-choose-codetrios-seo-heading">Why Choose CodeTrios for <span>SEO & GEO Services?</span></h2>
                        <p>At CodeTrios, we focus on improving your online visibility across search engines, local search results and AI-powered search platforms.</p>
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
        {/* Tools we work */}
        <div className='whyChooseUs' aria-labelledby="seo-geo-tools-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">SEO & ANALYTICS TOOLS</div>
                          <h2 id="seo-geo-tools-heading"><span>SEO, GEO & AEO</span> Tools We Work With</h2>
                          <p>CodeTrios combines strategy, design, development, deployment, hosting, optimization, and technical support to help businesses build and improve their digital presence. Our solutions are planned around your goals, users, technology requirements, and long-term growth.</p>
                        </div>
                        <div className="why_features">
                          {toolsData.map(({ icon: Icon, title, description }) => (
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
        <div className='services_process blockPadding' aria-labelledby="seo-geo-process-heading"> 
          <Container>
            <Row>
              <Col>
                <div className='services_process_container'>
                  <div className='sectionHead'>
                      <div className="tag">OUR OPTIMIZATION WORKFLOW</div>
                      <h2 id="seo-geo-process-heading">Our SEO, GEO & AEO <span>Process</span></h2>
                      <p>We follow a structured approach to understand your website, identify opportunities and improve its online visibility in the world.</p>
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
        <div className='services_industries blockPadding' aria-labelledby="seo-industries-heading">
          <Container>
            <Row>
              <Col>
                <div className='services_industries_bg'>
                  <div className='sectionHead'>
                      <div className="tag">WHO WE WORK WITH</div>
                      <h2 id="seo-industries-heading">Industries <span>We Serve</span></h2>
                      <p>CodeTrios designs and develops digital solutions for businesses and organisations across multiple industries. From corporate websites and educational portals to healthcare platforms and ecommerce applications, we deliver solutions tailored to industry-specific needs.</p>
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
        <div className='related-services blockPadding' aria-labelledby="related-digital-services-heading">
          <Container>
            <Row>
              <Col>
                <div className=''>
                  <div className="sectionHead">
                    <div className="tag">Related Services</div>
                    <h2 id="related-digital-services-heading">Explore Our Other <span>Digital Services</span></h2>
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
        <div className='whyChooseUs block-mg-top' aria-labelledby="seo-geo-aeo-faqs-heading">
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Frequently Asked Questions</div>
                          <h2 id="seo-geo-aeo-faqs-heading">Questions About Our <span>SEO, GEO & AEO</span> Services</h2>
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
        <ProjectCAT sectionId="seo-services-cta-heading" tagId="seo-services-cta-heading" />
      </div>
    </>
  )
}