import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import { getGameActions } from '../store/actions/gameActions';

interface Props {
  homeClub: string,
  awayClub: string,
  firstTeamGoals: number,
  secondTeamGoals: number,
  onSave: (firstTeamGoals: number, secondTeamGoals: number) => void;
  result: string;
  id: string;
  updateGame?: any;
  userDetails?: any;
  game: any;
  finishGame?: any;
}

const logoUrl = "../logo.jpg"

const ShowResultOfTheGame: React.FC<Props> = ({ result, finishGame, game, id, homeClub, awayClub, firstTeamGoals, secondTeamGoals, onSave, updateGame, userDetails }) => {
  const [modal, setModal] = useState(false)
  const [editedFirstTeamGoals, setEditedFirstTeamGoals] = useState<number>(Number(result.slice(0, result.indexOf("-"))))
  const [editedSecondTeamGoals, setEditedSecondTeamGoals] = useState<number>(Number(result.slice(result.indexOf("-") + 1)))

  const toggle = () => setModal(!modal)

  const handleSave = async () => {
    const res = await updateGame(id, `${editedFirstTeamGoals}-${editedSecondTeamGoals}`)
    console.log(res)
    toggle()
    window.location.reload()
  }

  useEffect(() => {
    setEditedFirstTeamGoals(Number(result.slice(0, result.indexOf("-"))))
    setEditedSecondTeamGoals(Number(result.slice(result.indexOf("-") + 1)))
  }, [result])

  const finish = async () => {
    const answer = await finishGame(id, true)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : answer.error.exception.response.data.message)
    } else {
      toast.success("Game marked as finished.")
      toggle()
    }
    window.location.reload()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="d-flex justify-content-center align-items-center">

        <img src={game.clubs[0].profilePicture === "NPP" ? logoUrl : game.clubs[0].profilePicture} className="mr-2" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
      <p className="text-center" style={{fontSize: "medium", fontWeight: "bold"}}>{homeClub} {result} {awayClub}</p>
      <img src={game.clubs[1].profilePicture === "NPP" ? logoUrl : game.clubs[1].profilePicture} className="ml-2" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
      </div>
      <p>{`Start${game.isFinished ? "ed" : "ing"} ${new Date(Number(game.time)).getHours().toString().padStart(2, "0")}:${new Date(Number(game.time)).getMinutes().toString().padStart(2, "0")}`}</p>


      {((homeClub === userDetails.username || awayClub === userDetails.username) && !game.isFinished) && <Button color="secondary" onClick={toggle} style={{ marginTop: '10px' }}>Edit</Button>}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Result</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="d-flex align-items-center">
              <img src={game.clubs[0].profilePicture === "NPP" ? logoUrl : game.clubs[0].profilePicture} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <Label for="firstTeamGoals" className="mr-2 ml-2">{homeClub}</Label>
              <Input type="number" id="firstTeamGoals" value={editedFirstTeamGoals} onChange={(e) => setEditedFirstTeamGoals(Number(e.target.value))} className="w-25 mr-2" />
              <Input type="number" id="secondTeamGoals" value={editedSecondTeamGoals} onChange={(e) => setEditedSecondTeamGoals(Number(e.target.value))} className="w-25 mr-2" />
              <Label for="secondTeamGoals" className="">{awayClub}</Label>
              <img src={game.clubs[1].profilePicture === "NPP" ? logoUrl : game.clubs[1].profilePicture} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Spremi</Button>
          <Button color="secondary" onClick={toggle}>Odbij</Button>
          <Button color="secondary" onClick={finish}>Završi utakmicu</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

//@ts-ignore
const mapStoreStateToProps = ({ auth }) => {
  return {
    ...auth
  }
}

const mapActionsToProps = (dispatch: any) => {
  return {
    ...getGameActions(dispatch)
  }
}


export default connect(mapStoreStateToProps, mapActionsToProps)(ShowResultOfTheGame)
