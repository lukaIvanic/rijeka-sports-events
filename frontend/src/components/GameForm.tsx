import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import { getLeagueActions } from '../store/actions/leagueActions';
import { getAuthActions } from '../store/actions/authActions';
import { getGameActions } from '../store/actions/gameActions';
import { Link, useNavigate } from 'react-router-dom';


interface Props {
  leagues?: any[];
  clubsFromSport?: any[];
  getAllClubsUsingSport?: any;
  createGame?: any;
}

interface FormData {
  date: string;
  time: string;
  team1: string;
  team2: string;
}

const GameForm: React.FC<Props> = ({ leagues, clubsFromSport = [], getAllClubsUsingSport, createGame }) => {
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    team1: '',
    team2: ''
  });

  const [sport, setSport] = useState<string>('nogomet');
  const [league, setLeague] = useState<string>('1. ZNL');
  const [team1, setTeam1] = useState<string>('');
  const [team2, setTeam2] = useState<string>('');

  const navigate = useNavigate()

  useEffect(() => {
    console.log(clubsFromSport)
  }, [clubsFromSport])

  useEffect(() => {
    getAllClubsUsingSport(sport)
  }, [sport])


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
    if (!formData.date || !formData.time || !sport || !league || !team1 || !team2) return toast.error('You need to fill all the fields');
    const gameDetails = {
      time: formData.date + "UTC" + formData.time,
      sport: sport,
      league: league,
      clubs: [clubsFromSport.find(c => c.username === team1)._id, clubsFromSport.find(c => c.username === team2)._id]
    };
    const answer = await createGame(gameDetails);
    console.log(answer)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
    } else {
      toast.info(`Game between ${team1} and ${team2} created`)
      navigate("/")
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center position-relative" style={{ height: '75vh' }}>
      <div className="link-top-left">
        <Link to="/" className="position-absolute" style={{ top: 10, left: 10 }}>
          <Button variant="secondary">
            X
          </Button>
        </Link>
      </div>
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
            <option value="kosarka">košarka</option>
            <option value="vaterpolo">vaterpolo</option>
            <option value="odbojka">odbojka</option>
          </select>
        </div>
        <div className="form-group">
          <select id="league" className="form-control" value={league} onChange={handleChangeLeague}>
            <option value="" disabled hidden>Choose league</option>
            {leagues && leagues.map((l: any) => <option key={l.name} value={l.name}>{l.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <select id="team1" className="form-control" value={team1} onChange={handleChangeTeam1}>
            <option value="" disabled hidden>Choose first team</option>
            {clubsFromSport && clubsFromSport.map((l: any) => <option key={l.username} value={l.username}>{l.username}</option>)}

          </select>
        </div>
        <div className="form-group">
          <select id="team2" className="form-control" value={team2} onChange={handleChangeTeam2}>
            <option value="" disabled hidden>Choose second team</option>
            {clubsFromSport && clubsFromSport.map((l: any) => <option key={l.username} value={l.username}>{l.username}</option>)}

          </select>
        </div>
        <Button type="submit" className="btn btn-secondary w-100 ">
          Submit
        </Button>
      </Form>
    </div>
  );

};

//@ts-ignore
const mapStoreStateToProps = ({ league, auth }) => {
  return {
    ...league,
    ...auth
  }
}


const mapActionsToProps = (dispatch: any) => {
  return {
    ...getLeagueActions(dispatch),
    ...getAuthActions(dispatch),
    ...getGameActions(dispatch),
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(GameForm)