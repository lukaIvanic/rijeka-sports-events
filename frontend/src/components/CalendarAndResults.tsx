import React, { FC, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CalendarBox from './CalendarBox';
import ResultsBox from './ResultsBox';

type cbProps = {
  date: Date;
  setDate: any;
  selectedSport: string;
} 

const CalendarAndResults: FC<cbProps> = ({date, setDate, selectedSport}) => {
  const [activeGame, setActiveGame] = useState(null)
  return <Container fluid style={{ marginTop: '30px' }}>
    <Row>
      <Col xs={12} md={8}>
        {/* Calendar box goes here */}
        <CalendarBox date={date}  setDate={setDate} selectedSport={selectedSport} setActiveGame={setActiveGame}/>
      </Col>
      <Col xs={12} md={4}>
        {/* Results box goes here */}
        <ResultsBox activeGame={activeGame}/>
      </Col>
    </Row>
  </Container>
}

export default CalendarAndResults;
