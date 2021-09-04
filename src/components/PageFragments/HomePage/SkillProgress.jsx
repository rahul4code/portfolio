import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <br />
    <br />
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={95}
          text="ReactJS"
        />
        <ProgressBar
          percent={75}
          text="Gatsby"
        />
        <ProgressBar
          percent={85}
          text="NodeJS"
        />
        <ProgressBar
          percent={87}
          text="Contentful"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="Java"
        />
        <ProgressBar
          percent={85}
          text="PostgreSQL"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={80}
          text="DevOps"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
