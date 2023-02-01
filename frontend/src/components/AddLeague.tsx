import React, { FC, useState } from 'react'
import { connect } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'reactstrap';
import { createLeague, getLeagueActions } from '../store/actions/leagueActions';

type alProps = {
  createLeague?: any;
}


const AddLeague:FC<alProps> = ({createLeague}) => {
    const navigate = useNavigate();
    const [sport, setSport] = useState("nogomet")
    const [name, setName] = useState("")

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!name || !sport) return toast.error("You need to fill all the fields")
        const leagueDetails = {
            name: name,
            sport: sport
        }
        console.log(leagueDetails)
        const answer = await createLeague(name, sport, navigate)
        console.log(answer)
        if (answer.error){  
           toast.error(answer.error)
        }
    };

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const handleSportChange = (e: any) => {
        setSport(e.target.value)
    }


  return (
    <div className="d-flex justify-content-center align-items-center position-relative" style={{ height: '75vh' }}>
      <div className="link-top-left">
          <Link to="/register" className="position-absolute" style={{ top: 10, left: 10 }}>
            <Button variant="secondary">
              X
            </Button>
          </Link>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">League name</label>
          <input type="text" className="form-control" id="username" value={name} onChange={handleNameChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="sport" >Select sport</label>
            <select id="sport" className="form-control" value={sport} onChange={handleSportChange}>
                <option value="default" selected disabled hidden>Choose sport</option>
                <option value="nogomet">Nogomet</option>
                <option value="rukomet">Rukomet</option>
                <option value="kosarka">Kosarka</option>
                <option value="vaterpolo">Vaterpolo</option>
                <option value="odbojka">Odbojka</option>
            </select>
        </div>
        <button type="submit" className="btn btn-secondary">
            Create league
        </button>
      </form>
  </div>
  )
}

//add mapActionToProps

const mapActionsToProps = (dispatch: any) => {
  return {
      ...getLeagueActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(AddLeague);