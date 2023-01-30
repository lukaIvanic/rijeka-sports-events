import React from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


const RegisterUserForm = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/login');
    };

    const handleAddLeague = () => {
      navigate('/addLeague');
    };

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
            <select id="sport" className="form-control">
                <option value="default" selected disabled hidden>Choose sport</option>
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
                <option value="HNL">HNL</option>
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

export default RegisterUserForm;