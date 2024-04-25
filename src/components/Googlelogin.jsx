import React, { useEffect, useState } from 'react';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';

export default function GoogleLoginComponent() {
    const [profile, setProfile] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedProfile = sessionStorage.getItem('profile');
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (response) => {
        console.log(response);
        setProfile(response.data);
        setIsLoggedIn(true);
        sessionStorage.setItem('profile', JSON.stringify(response.data));
        navigate('/');
    };

    const handleLogout = () => {
        clearGoogleSession(); 
        setProfile(null);
        setIsLoggedIn(false);
        sessionStorage.removeItem('profile');
    };

    const clearGoogleSession = () => {
        setIsLoggedIn(false); 
    };

    return (
        <div>
            {!isLoggedIn ? (
                <LoginSocialGoogle
                    client_id="843280307549-42741gl9h6ojem0mlr4861q6pu1cuug8.apps.googleusercontent.com"
                    onResolve={handleLogin}
                    onReject={(error) => {
                        console.log(error);
                    }}
                >
                    <GoogleLoginButton />
                </LoginSocialGoogle>
            ) : (
                <div>
                    <h1>{profile.name}</h1>
                    <img src={profile.picture} alt={profile.name} />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}
