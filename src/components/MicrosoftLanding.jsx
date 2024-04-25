import React from 'react';

function MicrosoftLanding({ profile, handleLogout }) {
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MicrosoftLanding;
