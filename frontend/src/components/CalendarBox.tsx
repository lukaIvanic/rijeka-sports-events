import { FC, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import ShowGame from './ShowGame';
import ShowResultOfTheGame from './ShowResultOfTheGame';

type cbProps = {
  date: Date;
  setDate: any;
} 

const CalendarBox: FC<cbProps> = ({date, setDate}) => {
  

  const previousDay = () => {
    // update the date to the previous day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
  };

  const nextDay = () => {
    // update the date to the next day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  };

  return (
    <Card style={{marginBottom: '20px'}}>
      <CardHeader className="fixed-height-card-header" style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col-2">
            <button className="btn btn-secondary fixed-width-btn" onClick={previousDay}>
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
            <button className="btn btn-secondary fixed-width-btn" onClick={nextDay}>
            {'>'}
            </button>
          </div>
        </div>

      </CardHeader>
      <CardBody>
        {/* Calendar content goes here */}
        <ShowGame
          homeClub="Home Club"
          awayClub="Away Club"
          timeOfTheGame='12:00'
        />
        <hr />
        <ShowGame
          homeClub="Home Club"
          awayClub="Away Club"
          timeOfTheGame='12:00'
        />
        <hr />
        <ShowGame
          homeClub="Home Club"
          awayClub="Away Club"
          timeOfTheGame='12:00'
        />
        <hr />
      </CardBody>
    </Card>
  );
};

export default CalendarBox;
