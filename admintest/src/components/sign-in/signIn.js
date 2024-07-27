// src/components/sign-in/SignIn.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/sign-in/signIn.css';

function SignIn() {
  const [passwordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row g-0 align-items-center justify-content-center'>
        <div className='col-md-3'>
          <div className='card my-5 glassmorphism-card'>
            <div className='card-body p-4 shadow-sm text-white'>
              <h2 className="fw-bold mb-4 text-center">EDEN ADMIN</h2>

              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='form3' className='form-label text-start'>Username</label>
                  <input
                    type='text'
                    id='form3'
                    className='form-control'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className='mb-3 position-relative'>
                  <label htmlFor='form4' className='form-label text-start'>Password</label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id='form4'
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className='btn btn-color w-100 mb-4' type='submit'>Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
