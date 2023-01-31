import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getAuthActions } from '../store/actions/authActions';

type lfProps = {
  login?: any;
}

const LoginForm:FC<lfProps> = ({login}) => {
  const navigate = useNavigate()
  const [usernameOrEmail, setUsernameOrEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUOEChange = (e: any) => {
    setUsernameOrEmail(e.target.value)
  }
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!usernameOrEmail || !password) return toast.error("You need to input uoe and password")
      const userDetails = {
        mail: usernameOrEmail,
        password,
      }
      const answer = await login(userDetails, navigate)
      console.log(answer)
      if (answer.error){
        toast.error(answer.error.exception?.code === "ECONNABORTED" ? "Something went wrong. Retry Connection" : "Credentials incorrect")
      }
    
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input type="text" className="form-control" id="email" value={usernameOrEmail} onChange={handleUOEChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
        <div className="form-group mt-5">
          <p onClick={() => navigate("/register")} style={{ color: "black", cursor: "pointer", textDecoration: "underline" }}>Don't have an account yet? Sign Up</p>
        </div>

      </form>
    </div>
  );
}

const mapActionsToProps = (dispatch: any)=>{
  return {
    ...getAuthActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginForm);
