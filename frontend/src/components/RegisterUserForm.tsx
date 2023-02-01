import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getLeagueActions } from "../store/actions/leagueActions"
import { getAuthActions } from '../store/actions/authActions';
import { Button } from 'reactstrap';

type rufProps = {
  leagues?: any[];
  getAllLeagues?: any;
  register?: any;
}

//@ts-ignore
const RegisterUserForm: FC<rufProps> = ({ getAllLeagues, leagues, register }) => {
  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("USER")
  const [sport, setSport] = useState("nogomet")
  const [league, setLeague] = useState("1. ZNL")

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

  const handleTypeChange = (e: any) => {
    console.log(e.target.value)
    setType(e.target.value)
  }

  const handleSportChange = (e: any) => {
    console.log(e.target.value)
    setSport(e.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!mail || !username || !password || !sport || !league) return toast.error("You need to fill all the fields")
    const userDetails = {
      mail,
      username,
      password,
      sport,
      league,
      type
    }
    console.log(userDetails)

    const answer = await register(userDetails, navigate)
    console.log(answer)
    if (answer.error) {
      toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
    } else {
      toast.success("Account created")
    }
  };

  const handleAddLeague = () => {
    navigate('/addLeague');
  };

  useEffect(() => {
    getAllLeagues()
  }, [])

  useEffect(() => {
    console.log(leagues)
  }, [leagues])


  return (
    <div className="d-flex justify-content-center align-items-center position-relative flex-column" style={{ height: '92vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group spaceIt">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" value={mail} onChange={handleMailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="text">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of account</label>
          <select id="type" className="form-control" value={type} onChange={handleTypeChange}>
            <option value="default" disabled hidden>Choose Type</option>
            <option value="USER">User</option>
            <option value="CLUB">Club</option>
          </select>
        </div>
        {type === "CLUB" && <>
          <div className="form-group">
            <label htmlFor="sport">Select sport</label>
            <select id="sport" className="form-control" value={sport} onChange={handleSportChange}>
              <option value="default" disabled hidden>Choose sport</option>
              <option value="nogomet">Nogomet</option>
              <option value="rukomet">Rukomet</option>
              <option value="kosarka">Kosarka</option>
              <option value="vaterpolo">Vaterpolo</option>
              <option value="odbojka">Odbojka</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="league">Select league</label>
            <select id="league" className="form-control" defaultValue={"nogomet"} onChange={handleLeagueChange}>
              <option value="default" disabled hidden>Choose league</option>
              {leagues && leagues.map((l: any) => {
                if (l && l.name && !l.name.includes("FRIENDLY"))
                  return <option key={l.name} value={l.name}>{l.name}</option>
              })}
            </select>
          </div>
        </>}
        <button type="submit" className="btn btn-secondary">
          Create account
        </button>
        <button type="button" className="btn btn-secondary ml-3" onClick={handleAddLeague}>
          Add new league
        </button>
      </form>
      <div className="form-group mt-5">
        <p onClick={() => navigate("/login")} style={{ color: "black", cursor: "pointer", textDecoration: "underline" }}>Already have an account? Log in</p>
      </div>
    </div>
  )
}
//@ts-ignore
const mapStoreStateToProps = ({ league }) => {
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