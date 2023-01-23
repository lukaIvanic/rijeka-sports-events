import { useState } from 'react';
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
      <CardHeader className="fixed-height-card-header" style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col-2">
            <button className=" btn btn-secondary fixed-width-btn gray-bg" onClick={previousDay}>
            {'<'}
            </button>
          </div>
          <div className="col-8">
            <h4>{date.toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
            
          })}</h4>
          </div>
          <div className="col-2">
            <button className="btn btn-secondary fixed-width-btn gray-bg" onClick={nextDay}>
            {'>'}
            </button>
          </div>
        </div>

      </CardHeader>
      <CardBody>
        {/* Calendar content goes here */}
      </CardBody>
    </Card>
  );
};

export default CalendarBox;
