import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Aboutus.css';
import '../HomeRoute_V1/About.css';
import {Link} from 'react-router-dom';
//icon
import { Workflow } from "lucide-react";
import {
  Monitor,
  Settings,
  FileText,
  Database,
  Cloud,
  MessageCircle,
  Users,
  Code2,
  ShieldCheck,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";
//compontnts
import NetworkBackground from '../UI/NetworkBackground.jsx';
import SEO from '../SEO/websiteMeta.jsx';
import SchemaGraph from '../SEO/Schema/SchemaGraph.jsx';
import ActionButton from '../ActionButton/ActionButton';
import Servicesslider from './Servicesslider.jsx';
import ProjectCAT from '../ActionButton/ProjectCAT.jsx';

// why choose us data
const whyChooseData = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We keep you informed with regular updates, honest advice, and clear communication throughout your project.",
  },
  {
    icon: Users,
    title: "Experienced Developers",
    description:
      "Our team brings together design and development expertise to create practical digital solutions.",
  },
  {
    icon: Code2,
    title: "Thoughtful Development",
    description:
      "We focus on clean code, usability, and maintainable solutions built around your business needs.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description:
      "From planning and development to launch and ongoing improvements, we support you throughout the project.",
  },
  {
    icon: LockKeyhole,
    title: "Ownership & Confidentiality",
    description:
      "We respect your ideas, business information, and project requirements throughout our collaboration.",
  },
];
// what we build data
const whatWeBuild = [
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
  {
    title: "SEO & Performance First",
    icon: Workflow,
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,",
  },
];

// Technology stack data
const technologyGroups = [
  {
    title: "Frontend",
    icon: Monitor,
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Applications",
    icon: Settings,
    technologies: ["Node.js", "PHP", "Laravel"],
  },
  {
    title: "CMS & Content",
    icon: FileText,
    technologies: ["WordPress", "Drupal", "Strapi"],
  },
  {
    title: "Databases",
    icon: Database,
    technologies: ["MySQL", "MongoDB"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    technologies: ["AWS", "Google Cloud"],
  },
];

export default function Aboutus(){
  return(
    <>
      <SEO page="about" />
        <SchemaGraph
            pageType="about"
            pageName="About CodeTrios"
            pageDescription="CodeTrios is a web development and digital solutions company in India providing website design, web development, ecommerce development, web application development, UI/UX design, custom software development, digital strategy consulting, web hosting, and SEO & GEO services."
            pageUrl="https://www.codetrios.com/about-us"
            breadcrumbs={[
                {
                    name: "Home",
                    url: "https://www.codetrios.com/"
                },
                {
                    name: "About Us",
                    url: "https://www.codetrios.com/about-us"
                }
            ]}
        />
      <section className='aboutScreen innerPageBg'>
        <div className="innerHeroBanner">
          <NetworkBackground />
          <Container>
            <Row>
              <Col>
                <div className='innerBannerContent'>
                  <div className="tag">About CodeTrios</div>
                  <h1>Thoughtful technology. <br />Built around <span>your business.</span></h1>
                  <p>CodeTrios is a web development and digital solutions company in India helping businesses build, improve, and scale their digital presence. We provide website design, web development, ecommerce development, web application development, custom software development, UI/UX design, digital strategy consulting, web hosting, and SEO & GEO services.</p>
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
                      <div className="tag">Our Story</div>
                      <h2>Building Digital Experiences That Move <span>Businesses Forward</span></h2>
                    </div>
                    <div className='secDetail'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
        <Servicesslider />
        {/* <div className='whatWeDo'>
          <Container>
            <Row>
              <Col>
              <div className="whatWeDoContent">
                <div className='sectionHead'>
                  <h2>What We Build</h2>
                  <p>We help businesses build, improve, and scale their digital presence. We provide website design, web development, ecommerce development, web application development, custom software development, UI/UX design, digital strategy consulting, web hosting, and SEO & GEO services.</p>
                </div>
                <div className="benefitGrid">
                  {whatWeBuild.map((item, index) =>{
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
              </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className='technologyStack' aria-labelledby="technology-expertise-title">
          <Container>
            <Row>
              <Col>
                <div className="technology-layout">
                  <div className='sectionHead'>
                    <div className="tag">Technology Expertise</div>
                    <h2> The technology <br /> behind your<br /> <span>next project.</span></h2>
                    <p>We leverage a diverse range of technologies to deliver innovative solutions that meet the unique needs of our clients. Our expertise spans across front-end and back-end development, cloud computing, AI & machine learning, and more.</p>
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
        
        <div className='whyChooseUs'>
            <Container>
              <Row>
                <Col>
                    <div className='why_container'>
                        <div className="sectionHead">
                          <div className="tag">Why businesses choose CodeTrios</div>
                          <h2 id="ct-why-heading">Reliable partners for your{" "}<span>digital growth.</span></h2>
                          <p>We bring together the right people, clear communication, and thoughtful technology to help your business move forward.</p>
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
        <ProjectCAT />
      </section>
    </>
  )
}