import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `
  Hello !! My name is Rahul Gupta. I'm a full stack web developer who is
    passionate about various web technologies and devops operations. I like to experiment with different web
    technologies. I have an experience of 3 years working with MERN and
    and JS tech, where I am responsible in building scalable and maintainable
    applications also Elating to explore and learn more corners of Apps by integrating components and
    services. `,
  paraTwo: `Currently I work mostly with Javascript technologies like <b>ReactJS</b> and <b>NodeJS</b>. I also
    have hands on experience working with cloud infrastructures like <b>AWS,Azure and OpenShift</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, Contentful are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
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
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        {/* <h1 className="titleSeparate">About Me</h1> */}
        <p>
          {pageText.paraOne}
        </p>
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
            img="guitar.png"
            alt="guitar.png"
            textH4="Love Playing Guitar"
            textH3="Can sing"
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
