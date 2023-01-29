import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import ShowResultOfTheGame from './ShowResultOfTheGame'

const Results = () => {
  return (
    <Card style={{marginBottom: '200px'}}>
      <CardHeader className="fixed-height-card-header">Results</CardHeader>
      <CardBody>
        {/* Results content goes here */}
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
        <ShowResultOfTheGame
          homeClub="Home Club"
          awayClub="Away Club"
          firstTeamGoals={1}
          secondTeamGoals={1}
          onSave={(firstTeamGoals: number, secondTeamGoals: number) => console.log('${firstTeamGoals}-${secondTeamGoals}')}
        />
        <hr />
      </CardBody>
    </Card>
  )
}

export default Results
