import React, { useState, useEffect } from 'react';
import { withAuth } from '../../providers/AuthProvider';
import './login.css';
import { Link } from 'react-router-dom';

const Login = ({ handleAuthLogin, getToken, userToken }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    getToken()
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    handleAuthLogin ()
  }


console.log(userToken)

  return (
    <div className='login-container'>
        <div>
            <img src='https://img.icons8.com/fluent/64/000000/twitter.png' alt="logo"/>
        </div>
      <form onSubmit={handleSubmit}>
        <input 
          className='login-box'
          type='text'
          name='userName'
          placeholder='Username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br/>
        <input 
          className="login-box"
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <Link to="/tweets"><button className='login-button'> Log in </button> </Link>
      </form>
    </div>
  );
}

export default withAuth(Login);