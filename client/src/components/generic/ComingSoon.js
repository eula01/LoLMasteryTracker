import React from 'react';
import '../../escape.css';

import awsnap from '../../awsnap.png';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const ComingSoon = (props) => (
  <Container>
  <Row className="topPadding">
    <Col>
      <Card className="bg-light text-dark">
      <Card.Img className="awsnapImg" variant="top" src={awsnap} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-center">Coming soon!</Card.Title>
        <Card.Text className="text-center">
          {props.txt}
        </Card.Text>
      </Card.ImgOverlay>
      </Card>
    </Col>
  </Row>
  </Container>
);


export default ComingSoon;