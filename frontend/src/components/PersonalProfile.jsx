import React from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { Image } from 'antd';
import { Breadcrumb } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;

import img from '../images/miko_ride.jpg';

// import { apiGetCookieTest } from '../requests'

class PersonalProfile extends React.Component {

  // componentDidMount() {
  //   apiGetCookieTest()
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error.data.message);
  //     });
  // }

  render() {
    return (
      <div style={{ padding: "1rem 0", transform: "scale(1.1)", transformOrigin: "top left" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Site</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <Card title="關於我" style={{ width: 'calc(50% * 1.1)' /* Adjust width accordingly if necessary */ }}>
          <Row gutter={10}>
            <Col span={6}>
              <Image src={img} alt="Your Image Description" />
            </Col>
            <Col span={18}>
              <Title level={3}>林聖諺</Title>
              <p>大家好!我的綽號叫feast</p>
              {/* Add more content here as needed */}
            </Col>
          </Row>
        </Card>
        {/* You can add more content components here */}
      </div>
    );
  }
}

export default PersonalProfile