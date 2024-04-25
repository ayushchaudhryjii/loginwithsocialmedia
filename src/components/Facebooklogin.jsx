import React, { useEffect, useState } from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { useNavigate } from 'react-router-dom';

export default function Facebooklogin() {
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
        if (response.data) {
            setProfile(response.data);
            setIsLoggedIn(true);
            sessionStorage.setItem('profile', JSON.stringify(response.data));
            navigate('/');
        } else {
            console.error('Invalid response from Facebook:', response);
        }
    };

    const handleLogout = () => {
        clearFacebookSession();
        setProfile(null);
        setIsLoggedIn(false);
        sessionStorage.removeItem('profile');
    };

    const clearFacebookSession = () => {
        window.FB.logout((response) => {
            console.log('User logged out from Facebook');
        });
    };

    return (
        <div>
            {!isLoggedIn ? (
                <LoginSocialFacebook
                    appId="2810288565798702"
                    onResolve={handleLogin}
                    onReject={(error) => {
                        console.log(error);
                    }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
            ) : (
                <div>
                    {profile && (
                        <>
                            <h1>{profile.name}</h1>
                            {profile.picture && profile.picture.data && profile.picture.data.url && (
                                <img src={profile.picture.data.url} alt={profile.name} />
                            )}
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
