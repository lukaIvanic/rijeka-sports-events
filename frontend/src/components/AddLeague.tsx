import React from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom';



export const AddLeague = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/register');
    };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="text">League name</label>
        <input type="text" className="form-control" id="username" />
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
      <button type="submit" className="btn btn-secondary">
          Create league
      </button>
    </form>
  </div>
  )
}
