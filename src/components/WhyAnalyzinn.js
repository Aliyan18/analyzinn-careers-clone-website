  
import React from 'react';
import image from "../images/choose.PNG";
import '../Stylesheets/WhyAnalyzinn.css';
import { Row, Col, Typography, List } from 'antd';
import {
  BarChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
  FundProjectionScreenOutlined,
  CloudSyncOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const services = [
  { title: 'Business Intelligence', icon: <BarChartOutlined /> },
  { title: 'Data Analytics & Visualization', icon: <LineChartOutlined /> },
  { title: 'Digital Marketing', icon: <AreaChartOutlined /> },
  { title: 'Automation and Integrations', icon: <FundProjectionScreenOutlined /> },
  { title: 'Data Management & Data Engineering', icon: <CloudSyncOutlined /> },
];

const WhyAnalyzinn = () => (
  <div className="container">
    <Row justify="center" align="middle" gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <img
          src={image}
          className="image"
        />
      </Col>
      <Col xs={24} md={12}>
        <Title level={2} style={{ color: 'black', fontSize: '50px', fontFamily: ' Arial, sans-serif', fontWeight: 'bold',textAlign:'center' }}>Why Choose Us?</Title>
        <Paragraph style={{  fontSize: '16px', color: 'black',fontFamily: ' Arial, sans-serif',textAlign:'left' }}>
          We partner with our clients, take full ownership of their business needs and devise tailored solutions
          for their unique requirements. Our solutions are result-oriented, technology-driven, with end-to-end
          implementations including Digital Marketing, BI frameworks, and strategic consultancy.
        </Paragraph>
      </Col>
    </Row>
    <br></br>
    <br></br>
    <Row justify="center" align="middle" gutter={[16, 16]}>
      <Col xs={24}>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={services}
          //The function receives each item from the dataSource array as an argument.
          renderItem={item => (
            <List.Item>
              <div className="list-item">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
    <div style={{ borderTop: '1px solid #ddd', marginTop: '40px' }}></div>
  </div>
);

export default WhyAnalyzinn;