import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `
  Hey ! My name is Rahul Gupta. I'm a <b>MERN-Stack</b> developer, passionate about various web technologies and dev operations.
   I like to experiment with different services and tools. I am Having <b>3 years</b> of professional experience in application development
    and working with JS libraries, Responsible to build scalable applications, elating to explore and learn more 
    corners of apps by integrating components, tools and services.`,
  paraTwo: `I work mostly with JS framework and libraries, like ReactJS and NodeJS. I also have hands-on experience on cloud services on 
  platforms like <b>AWS</b>, <b>Azure</b> and <b>OpenShift</b>. Always excited to meet the requirements. Familiar with Docker, DENODO, Jenkins and more.
   Finally a learner and a self taught programmer.`,
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
        <p
           dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
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
