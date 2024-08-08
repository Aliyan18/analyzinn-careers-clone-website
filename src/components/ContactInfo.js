import React from 'react';
import { Row, Col, Typography } from 'antd';
import { MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../styleSheets/ContactInfo.css';

const { Title, Paragraph } = Typography;

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <Row gutter={[16, 16]} className="contact-info-row">
        <Col xs={24} md={12}>
          <div className="contact-info">
            <EnvironmentOutlined className="contact-info-icon" />
            <div>
              <Title level={3} style={{ margin: 0, marginLeft: 8, fontSize: '15px', fontFamily: 'serif', fontWeight: 'bold' }}>
                HEAD OFFICE
              </Title>
              <Paragraph style={{ margin: 0, marginLeft: 8, fontSize: '18px', color: '#000' }}>
                13th Street, Lubbock, Texas, United States
              </Paragraph>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="contact-info">
            <MailOutlined className="contact-info-icon" />
            <div>
              <Title level={3} style={{ margin: 0, marginLeft: 8, fontSize: '15px', fontFamily: 'serif', fontWeight: 'bold' }}>
                EMAIL
              </Title>
              <Paragraph style={{ margin: 0, marginLeft: 8, fontSize: '18px', color: '#000' }}>
                admin@analyzinn.com
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactInfo;
