import React from 'react';
import { Row, Col, Typography } from 'antd';
import '../Stylesheets/Aboutsection.css';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: '50px' }}>
          <Col span={24}>
            <Title level={1} style={{ color: 'white', fontSize: '60px', fontFamily: ' Arial, sans-serif', fontWeight: 'bold',textAlign:'center' }}>About</Title>
            <div className="underline"></div>
          </Col>
        </Row>
      </div>

      <div className="detail-section">
        <Row justify="center" align="middle" style={{ marginBottom: '40px' }}>
          <Col span={12} xs={24} md={12}>
            <Title level={2} style={{ textAlign: 'left', fontSize: '50px' }}>
              <br></br>
              Consulting Firm<br /> Powered by Analytics
            </Title>
          </Col>
          <Col span={12} xs={24} md={12}>
            <Paragraph style={{ fontSize: '20px', fontStyle: 'italic' }}>
              <br></br><br></br>
              We support leaders to EVOLVE their organizations using our proven analytics consulting services.
            </Paragraph>
            <Paragraph style={{ fontSize: '15px' }}>
              We're a growing group of IT professionals providing businesses worldwide with <br />solutions and services of Data Management, Reporting & Visualization, Digital<br />marketing, Automations & Integrations. ANALYZINN will provide you with a steady <br />stream of actionable insights to fuel intelligent technologies; visibility to boost<br /> relevance and revenue. And accelerate innovation!
            </Paragraph>
          </Col>
        </Row>
        <div style={{ borderTop: '1px solid #ddd', marginTop: '40px' }}></div>
      </div>
    </div>
  );
};

export default About;
