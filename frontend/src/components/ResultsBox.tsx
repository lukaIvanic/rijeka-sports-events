import React, { FC, useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import ShowResultOfTheGame from './ShowResultOfTheGame';

type resultProps = {
  activeGame: any;
}

const Results:FC<resultProps> = ({activeGame}) => {
  const [firstTeamGoals, setFirstTeamGoals] = useState([1, 1, 1, 1, 1, 1]);
  const [secondTeamGoals, setSecondTeamGoals] = useState([1, 1, 1, 1, 1, 1]);

  const handleSave = (index: number, editedFirstTeamGoals: number, editedSecondTeamGoals: number) => {
    setFirstTeamGoals((prevFirstTeamGoals) => {
      const updatedFirstTeamGoals = [...prevFirstTeamGoals];
      updatedFirstTeamGoals[index] = editedFirstTeamGoals;
      return updatedFirstTeamGoals;
    });
    setSecondTeamGoals((prevSecondTeamGoals) => {
      const updatedSecondTeamGoals = [...prevSecondTeamGoals];
      updatedSecondTeamGoals[index] = editedSecondTeamGoals;
      return updatedSecondTeamGoals;
    });
  };

  return (
    <Card style={{ marginBottom: '200px' }}>
      <CardHeader className="fixed-height-card-header" style={{backgroundColor: "#A6E3E9"}}>Rezultati</CardHeader>
      <CardBody style={{backgroundColor: "#CBF1F5"}}>
      {!activeGame &&  <h4 style={{textAlign: "center"}}>Nije odabrana nijedna utakmica</h4> }
        {activeGame && <ShowResultOfTheGame
          id={activeGame._id}
          homeClub={activeGame.clubs[0].username}
          awayClub={activeGame.clubs[1].username}
          firstTeamGoals={firstTeamGoals[0]}
          secondTeamGoals={secondTeamGoals[1]}
          result={activeGame.result}
          game={activeGame}
          onSave={(editedFirstTeamGoals, editedSecondTeamGoals) => handleSave(0, editedFirstTeamGoals, editedSecondTeamGoals)}
        />}
        
      </CardBody>
    </Card>
  );
};

export default Results;
