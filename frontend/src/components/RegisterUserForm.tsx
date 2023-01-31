import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {getLeagueActions} from "../store/actions/leagueActions"
import { getAuthActions } from '../store/actions/authActions';

type rufProps = {
  leagues?: string[];
  getAllLeagues?: any;
  register?: any;
}

//@ts-ignore
const RegisterUserForm:FC<rufProps> = ({getAllLeagues, leagues, register}) => {
    const [mail, setMail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [sport, setSport] = useState("")
    const [league, setLeague] = useState("")

    const navigate = useNavigate();

    const handleMailChange = (e: any) => {
      setMail(e.target.value)
    }

    const handleUsernameChange = (e: any) => {
      setUsername(e.target.value)
    }

    const handlePasswordChange = (e: any) => {
      setPassword(e.target.value)
    }

    const handleLeagueChange = (e: any) => {
      setLeague(e.target.value)
    }


    const handleSportChange = (e: any) => {
      setSport(e.target.value)
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //@ts-ignore
        console.log(event.target.value)
        if(!mail || !username || !password || !sport || !league) return toast.error("You need to fill all the fields")
        const userDetails = {
          mail: mail,
          username: username,
          password: password,
          sport: sport,
          league: league
        }
        const answer = register(userDetails, navigate)
        console.log(answer)
        if (answer.error){
          toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
        }
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
          <input type="email" className="form-control" id="email" value={mail} onChange={handleMailChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange}/>
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
            <select id="league" className="form-control" onChange={handleLeagueChange}>
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
    ...getLeagueActions(dispatch),
    ...getAuthActions(dispatch)
  }
}


export default connect(mapStoreStateToProps, mapActionsToProps)(RegisterUserForm)