import React, { FC, useState } from 'react'
import { connect } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { createLeague } from '../store/actions/leagueActions';

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
        //const answer = await createLeague(leagueDetails, navigate)
        //console.log(answer)
        //if (answer.error){  
        //    toast.error(answer.error)
        //}
        navigate('/register');
    };

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const handleSportChange = (e: any) => {
        setSport(e.target.value)
    }


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="text">League name</label>
        <input type="text" className="form-control" id="username" value={name} onChange={handleNameChange}/>
      </div>
      <div className="form-group">
          <label htmlFor="sport" >Select sport</label>
          <select id="sport" className="form-control" value={sport} onChange={handleSportChange}>
              <option value="default" selected disabled hidden>Choose sport</option>
              <option value="nogomet">nogomet</option>
              <option value="rukomet">rukomet</option>
              <option value="kosarka">kosarka</option>
              <option value="vaterpolo">vaterpolo</option>
              <option value="odbojka">odbojka</option>
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
      createLeague: (leagueDetails: any, navigate: any) => dispatch(createLeague(leagueDetails, navigate))
  }
}

export default connect(null, mapActionsToProps)(AddLeague);