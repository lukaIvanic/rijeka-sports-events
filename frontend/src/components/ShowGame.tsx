import React from 'react'
const logoUrl = "../logo.jpg"

interface Props {
    homeClub: string;
    awayClub: string;
    timeOfTheGame: string;
    setActiveGame: any;
    game: any;
    gameDate: string;
  }


const ShowGame: React.FC<Props> = ({ homeClub, awayClub, timeOfTheGame, setActiveGame, game, gameDate}) => {
  return (
    <div onClick={()=>setActiveGame(game)} style={{ display: 'flex', cursor: "pointer", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: game.isFinished ? "#F9B7C4" : "white" }}>
        <div className="d-flex">
            <img src={game.clubs[0].profilePicture === "NPP" ? logoUrl : game.clubs[0].profilePicture} className="mr-3" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
            <p className="text-center" style={{fontSize: "medium", fontWeight: "bold"}}>{homeClub} {" - "} {awayClub}</p>
            <img src={game.clubs[1].profilePicture === "NPP" ? logoUrl : game.clubs[1].profilePicture} className="ml-3" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
        </div>
        {!game.isFinished && <p className="text-center mb-3" style={{fontSize: "large", fontWeight: "bold"}}>{game.isFinished ? "Završilo" : gameDate}</p>}
        <p className="text-center mb-3" style={{fontSize: "large", fontWeight: "bold"}}>{game.isFinished ? "Završilo" : timeOfTheGame}</p>
    </div>
  )
}

export default ShowGame;
