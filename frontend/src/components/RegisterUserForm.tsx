import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {getLeagueActions} from "../store/actions/leagueActions"

type rufProps = {
  leagues?: string[];
  getAllLeagues?: any;
}

//@ts-ignore
const RegisterUserForm:FC<rufProps> = ({getAllLeagues, leagues}) => {
    const [mail, setMail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [sport, setSport] = useState("")
    const [league, setLeague] = useState("")

    const navigate = useNavigate();

    const handleSportChange = (e: any) => {
      setSport(e.target.value)
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //@ts-ignore
        console.log(event.target.value)
    };

    const handleAddLeague = () => {
      navigate('/addLeague');
    };

    useEffect(() => {
      getAllLeagues()
    }, [])
    

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group">
            <label htmlFor="sport">Select sport</label>
            <select id="sport" className="form-control" value={sport} onChange={handleSportChange}>
                <option value="default" disabled hidden>Choose sport</option>
                <option value="football">Football</option>
                <option value="handball">Handball</option>
                <option value="basketball">Basketball</option>
                <option value="waterpolo">Waterpolo</option>
                <option value="volleyball">Volleyball</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="league">Select league</label>
            <select id="league" className="form-control">
                <option value="default" selected disabled hidden>Choose league</option>
                {leagues.map((l: any) => <option value={l.name}>{l.name}</option>)}
            </select>
        </div>
        <button type="submit" className="btn btn-secondary">
            Create account
        </button>
        <button type="button" className="btn btn-secondary ml-3" onClick={handleAddLeague}>
            Add new league
        </button>
      </form>
    </div>
  )
}
//@ts-ignore
const mapStoreStateToProps = ({league})=>{
  return {
    ...league
  }
}


const mapActionsToProps = (dispatch: any) => {
  return {
    ...getLeagueActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(RegisterUserForm)