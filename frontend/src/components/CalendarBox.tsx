import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { getGameActions } from '../store/actions/gameActions';
import ShowGame from './ShowGame';
import ShowResultOfTheGame from './ShowResultOfTheGame';

type cbProps = {
  date: Date;
  setDate: any;
  games?: any[];
  getGamesFromSport?: any;
  selectedSport: string;
  setActiveGame: any;
} 

const CalendarBox: FC<cbProps> = ({date, setDate, games, getGamesFromSport, selectedSport, setActiveGame}) => {
  

  const previousDay = () => {
    // update the date to the previous day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1));
  };

  const nextDay = () => {
    // update the date to the next day
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  };

  useEffect(() => {
    getGamesFromSport(selectedSport, 1675090800)
  }, [selectedSport])

  // useEffect(() => {
  //   console.log(games)
  // }, [games])

  return (
    <Card style={{marginBottom: '20px'}}>
      <CardHeader className="fixed-height-card-header" style={{ textAlign: 'center', backgroundColor: "#A6E3E9" }}>
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
      <CardBody style={{backgroundColor: "#CBF1F5"}}>
        {games && games.map((g: any) => <><ShowGame setActiveGame={setActiveGame} key={g._id} game={g} homeClub={g.clubs[0].username} awayClub={g.clubs[1].username} gameDate={`${new Date(Number(g.time)).getDate().toString().padStart(2, "0")}.${(new Date(Number(g.time)).getMonth()+1).toString().padStart(2, "0")}.${(new Date(Number(g.time)).getUTCFullYear()+53).toString().padStart(2, "0")}`} timeOfTheGame={`${new Date(Number(g.time)).getHours().toString().padStart(2, "0")}:${new Date(Number(g.time)).getMinutes().toString().padStart(2, "0")}`}/><hr /> </>)}
        {games && games.length === 0 && <h4 style={{textAlign: "center"}}>Nema utakmica za ovaj dan</h4> }
      </CardBody>
    </Card>
  );
};

//@ts-ignore
const mapStoreStateToProps = ({game})=>{
  return {
    ...game
  }
}


const mapActionsToProps = (dispatch: any) => {
  return {
    ...getGameActions(dispatch)
  }
}


export default connect(mapStoreStateToProps,mapActionsToProps) (CalendarBox);