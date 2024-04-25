import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername, setEmail } from './userSlice';
import { useNavigate } from 'react-router-dom';
import Microsoftlogin from './Microsoftlogin';
import Facebooklogin from './Facebooklogin'; 
import Googlelogin from './/Googlelogin';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsernameLocal] = useState('');
    const [email, setEmailLocal] = useState('');
    
    const handleUsernameChange = (event) => {
        setUsernameLocal(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmailLocal(event.target.value);
    }

    const handleClick = () => {
        dispatch(setUsername(username));
        dispatch(setEmail(email));
        navigate("/landing-page")
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <form className='login-form'>
                    <h3 className='login-heading'>Log-In</h3>
                    <div className='form-group'>
                        <label htmlFor='username'>UserName</label>
                        <input 
                            type="text" 
                            placeholder='Enter Username' 
                            className='form-control' 
                            value={username} 
                            onChange={handleUsernameChange} 
                            required 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            className='form-control' 
                            value={email} 
                            onChange={handleEmailChange} 
                            required 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type="password" 
                            placeholder='Enter Password' 
                            className='form-control' 
                            required 
                        />
                    </div>
                    <div className='form-group'>
                        <button onClick={handleClick} className='btn btn-primary'>Log-In</button>
                        <Microsoftlogin />
            <Facebooklogin />
            <Googlelogin />
                    </div>
                </form>
            </div>
          
        </div>
    );
}
