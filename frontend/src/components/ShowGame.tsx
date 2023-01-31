import React from 'react'
const logoUrl = "../logo.jpg"

interface Props {
    homeClub: string,
    awayClub: string,
    timeOfTheGame: string,
  }


const ShowGame: React.FC<Props> = ({ homeClub, awayClub, timeOfTheGame}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="d-flex">
            <img src={logoUrl} className="mr-3" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            <p className="text-center">{homeClub} {" - "} {awayClub}</p>
            <img src={logoUrl} className="ml-3" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
        </div>
        <p className="text-center mb-3">{timeOfTheGame}</p>
    </div>
  )
}

export default ShowGame;
