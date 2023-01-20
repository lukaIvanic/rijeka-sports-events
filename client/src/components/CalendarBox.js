import { useState } from 'react';
import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const CalendarBox = () => {
  const [date, setDate] = useState(new Date());

  const previousDay = () => {
    // update the date to the previous day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
  };

  const nextDay = () => {
    // update the date to the next day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  };

  return (
    <Card>
      <CardHeader style={{ textAlign: 'center' }}>
        <button onClick={previousDay} style={{ marginRight: '100px' }}>{'<'}</button>
        {date.toDateString()}
        <button onClick={nextDay} style={{ marginLeft: '100px' }}>{'>'}</button>
      </CardHeader>
      <CardBody>
        {/* Calendar content goes here */}
      </CardBody>
    </Card>
  );
};

export default CalendarBox;
