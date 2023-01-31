import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

interface Props {
  homeClub: string,
  awayClub: string,
  firstTeamGoals: number,
  secondTeamGoals: number,
  onSave: (firstTeamGoals: number, secondTeamGoals: number) => void
}

const logoUrl = "../logo.jpg"

const ShowResultOfTheGame: React.FC<Props> = ({ homeClub, awayClub, firstTeamGoals, secondTeamGoals, onSave }) => {
  const [modal, setModal] = useState(false)
  const [editedFirstTeamGoals, setEditedFirstTeamGoals] = useState(firstTeamGoals)
  const [editedSecondTeamGoals, setEditedSecondTeamGoals] = useState(secondTeamGoals)

  const toggle = () => setModal(!modal)

  const handleSave = () => {
    onSave(editedFirstTeamGoals, editedSecondTeamGoals)
    toggle()
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="d-flex justify-content-center align-items-center">
      <img src={logoUrl} className="mr-3" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
      <p className="text-center">{homeClub} {firstTeamGoals}:{secondTeamGoals} {awayClub}</p>
      <img src={logoUrl} className="ml-3" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
    </div>


      <Button color="secondary" onClick={toggle} style={{ marginTop: '10px' }}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Result</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="firstTeamGoals">First Team Goals</Label>
              <Input type="number" id="firstTeamGoals" value={editedFirstTeamGoals} onChange={(e) => setEditedFirstTeamGoals(parseInt(e.target.value))} />
            </FormGroup>
            <FormGroup>
              <Label for="secondTeamGoals">Second Team Goals</Label>
              <Input type="number" id="secondTeamGoals" value={editedSecondTeamGoals} onChange={(e) => setEditedSecondTeamGoals(parseInt(e.target.value))} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ShowResultOfTheGame
