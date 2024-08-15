import React from 'react';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import { FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import '../styleSheets/ContactForm.css';

const { Title, Paragraph } = Typography;

const ContactForm = ({text, display}) => {

  const sendEmail = (values) => {
    console.log('Sending email with values:', values);
    emailjs
      .send('service_2mjcsbh', 'template_hbpgahq', values, 'HyIvNJZ9GXhSQWZBo')
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const onFinish = (values) => {
    console.log('Received values from form:', values);
    sendEmail(values);
  };

  return (
    <div className="contact-container" >
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
        <Title level={2} style={{ color: 'white', fontSize: '70px', fontFamily: ' Arial, sans-serif', fontWeight: 'bold' }}>
               {text}
        </Title>          
          <Paragraph style={{  fontSize: '30px', color: '#fff',fontFamily: ' Arial, sans-serif', fontWeight: 'bold' }}>
            Feel free to contact us for any <br />questions or request a Free <br />Consultation
          </Paragraph>
          {!display && (<Paragraph style={{  fontSize: '16px', color: '#fff',fontFamily: ' Arial, sans-serif' }} >
              We partner with our clients, take full ownership of their business needs
            and devise tailored solutions for their unique requirements. Our
            solutions are result-oriented, technology driven, with end-to-end
            implementations including Digital Marketing, BI frameworks, and
            strategic consultancy.
          </Paragraph>)}
          <Title level={3} style={{ color: 'white', fontSize: '20px', fontFamily: ' Arial, sans-serif' }}>
                Keep In Touch
        </Title> 
          <div>
            <br />
            <a href="https://www.facebook.com/analyzinn" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="contact-icons" />
            </a>
            <a href="https://www.linkedin.com/company/analyzinn" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="contact-icons" />
            </a>
          </div>
        </Col>
        <Col xs={24} md={12} className="form">
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="contact-form"
          >
            <Form.Item
              name="name"
              label={<span className="contact-label">Name</span>}
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label={<span className="contact-label">Email</span>}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="message"
              label={<span className="contact-label">Comment or Message</span>}
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea rows={4} placeholder="Comment or Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="contact-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ContactForm;
