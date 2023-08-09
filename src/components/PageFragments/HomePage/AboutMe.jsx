import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `I'm Rahul Gupta, an adept Full-Stack developer with 5 years of experience in crafting exceptional digital solutions. My expertise revolves around dynamic web technologies and seamless dev operations.
  With mastery in JS frameworks like ReactJS, NodeJS, and KnexJS, I excel in building scalable applications that seamlessly integrate components, tools, and services. My journey into cloud technology has led me to AWS, Azure, and OpenShift, adding depth to my projects.
  Equipped with Docker, DENODO, Jenkins, and JIRA, I orchestrate development lifecycles with finesse. As a self-taught programmer, I thrive on continuous learning and innovation.`,
  paraTwo: 'Welcome to my portfolio, a testament to my commitment, innovation, and passion for transforming ideas into functional realities. Let\'s collaborate to create digital experiences that brilliantly unite creativity and functionality.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rahul', 'MERN', 'AWS', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        {/* <h1 className="titleSeparate">About Me</h1> */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Barabanki, India"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Active"
            textH3="Inspired"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="experience.png"
            alt="experience.png"
            textH4="Professional Experience"
            textH3="3 Years"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Voc in"
            textH3="Software Development"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
