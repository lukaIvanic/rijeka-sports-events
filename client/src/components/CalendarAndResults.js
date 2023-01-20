import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CalendarBox from './CalendarBox';
import ResultsBox from './ResultsBox';

const CalendarAndResults = () => (
  <Container fluid style={{ marginTop: '30px' }}>
    <Row>
      <Col xs={12} md={8}>
        {/* Calendar box goes here */}
        <CalendarBox />
      </Col>
      <Col xs={12} md={4}>
        {/* Results box goes here */}
        <ResultsBox />
      </Col>
    </Row>
  </Container>
);

export default CalendarAndResults;
