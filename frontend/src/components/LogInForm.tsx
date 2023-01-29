import React from 'react';


function LoginForm() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
        <div className="form-group mt-5">
          <a href="/register" style={{color: "black"}}>Don't have an account yet? Sign Up</a>
        </div>

      </form>
    </div>
  );
}

export default LoginForm;
