import React, { useState } from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import MicrosoftLanding from './MicrosoftLanding';

function Microsoftlogin() {
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (authResponse) => {
    console.log(authResponse);
    const { account, idToken } = authResponse;
    const profileData = {
      name: account.name,
      email: account.userName,
      idToken: idToken,
    };
    setProfile(profileData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    clearMicrosoftSession(); 
    setProfile(null);
    setIsLoggedIn(false);
  };

  const clearMicrosoftSession = () => {
    localStorage.removeItem('microsoft_token');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <MicrosoftLogin
          clientId="1ab2f575-84ee-4597-bb63-c66ecec76ed5"
          authCallback={handleLogin}
          redirectUri="http://localhost:5173/" 
          children={<button className='micro'>Login with Microsoft</button>}
        />
      ) : (
        <MicrosoftLanding profile={profile} handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default Microsoftlogin;
