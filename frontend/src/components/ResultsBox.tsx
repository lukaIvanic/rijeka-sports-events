import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import ShowResultOfTheGame from './ShowResultOfTheGame';

const Results = () => {
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
      <CardHeader className="fixed-height-card-header">Results</CardHeader>
      <CardBody>
        {/* Results content goes here */}
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={firstTeamGoals[0]}
          secondTeamGoals={secondTeamGoals[0]}
          onSave={(editedFirstTeamGoals, editedSecondTeamGoals) => handleSave(0, editedFirstTeamGoals, editedSecondTeamGoals)}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={firstTeamGoals[1]}
          secondTeamGoals={secondTeamGoals[1]}
          onSave={(editedFirstTeamGoals, editedSecondTeamGoals) => handleSave(1, editedFirstTeamGoals, editedSecondTeamGoals)}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={firstTeamGoals[2]}
          secondTeamGoals={secondTeamGoals[2]}
          onSave={(editedFirstTeamGoals, editedSecondTeamGoals) => handleSave(2, editedFirstTeamGoals, editedSecondTeamGoals)}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={firstTeamGoals[3]}
          secondTeamGoals={secondTeamGoals[3]}
          onSave={(editedFirstTeamGoals, editedSecondTeamGoals) => handleSave(3, editedFirstTeamGoals, editedSecondTeamGoals)}
        />
        <hr />
      </CardBody>
    </Card>
  );
};

export default Results;
