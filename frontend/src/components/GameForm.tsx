import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { idText } from 'typescript';
import { createGame } from '../api/api';
import { toast } from 'react-toastify';


interface Props {}

interface FormData {
  date: string;
  time: string;
  team1: string;
  team2: string;
}

const GameForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    team1: '',
    team2: ''
  });

  const [sport, setSport] = useState<string>('nogomet');
  const [league, setLeague] = useState<string>('HNL');
  const [team1, setTeam1] = useState<string>('dinamo');
  const [team2, setTeam2] = useState<string>('hajduk');

  const handleChangeSport = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSport(value);
  };

  const handleChangeLeague = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLeague(value);
  };

  const handleChangeTeam1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTeam1(value);
  };

  const handleChangeTeam2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTeam2(value);
  };
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // add your submit logic here and use GameSchema.ts as a reference
    if (!formData.date || !formData.time || !sport || !league || !team1 || !team2) return toast.error('You need to fill all the fields');
    const gameDetails = {
      date: formData.date,
      time: formData.time,
      sport: sport,
      league: league,
      team1: team1,
      team2: team2
    };
    console.log(gameDetails);
    const answer = await createGame(gameDetails);
    console.log(answer);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh'}}>
        <Form onSubmit={handleSubmit} >
            <div className="form-group">
              <Label for="date" className="sr-only">
                Date
              </Label>
              <Input
                type="date"
                name="date"
                id="date"
                onChange={handleChange}
                value={formData.date}
                className="form-control"
                placeholder="Date"
                required
              />
            </div>
            <div className="form-group">
              <Label for="time" className="sr-only">
                Time
              </Label>
              <Input
                type="time"
                name="time"
                id="time"
                onChange={handleChange}
                value={formData.time}
                className="form-control"
                placeholder="Time"
                required
              />
            </div>
              <div className="form-group">
                <select id="sport" className="form-control" value={sport} onChange={handleChangeSport}>
                    <option value="default" selected disabled hidden>Choose sport</option>
                    <option value="nogomet">nogomet</option>
                    <option value="rukomet">rukomet</option>
                    <option value="košarka">košarka</option>
                    <option value="vaterpolo">vaterpolo</option>
                    <option value="odbojka">odbojka</option>
                </select>
              </div>
              <div className="form-group">
                <select id="league" className="form-control" value={league} onChange={handleChangeLeague}>
                    <option value="default" selected disabled hidden>Choose league</option>
                    <option value="HNL">HNL</option>
                </select>
              </div>
              <div className="form-group">
                <select id="team1" className="form-control" value={team1} onChange={handleChangeTeam1}>
                    <option value="default" selected disabled hidden>Choose first team</option>
                    <option value="dinamo">dinamo</option>
                    <option value="hajduk">hajduk</option>
                    <option value="rab">rab</option>
                </select>
              </div>
              <div className="form-group">
                <select id="team2" className="form-control" value={team2} onChange={handleChangeTeam2}>
                    <option value="default" selected disabled hidden>Choose second team</option>
                    <option value="dinamo">dinamo</option>
                    <option value="hajduk">hajduk</option>
                    <option value="rab">rab</option>
                </select>
              </div>
            <Button type="submit" className="btn btn-secondary w-100 ">
              Submit
            </Button>
        </Form>
    </div>
  );
  
};

const mapActionsToProps = (dispatch: any) => {
  return {
    ...createGame(dispatch)
  };
}

export default connect(null, mapActionsToProps)(GameForm);