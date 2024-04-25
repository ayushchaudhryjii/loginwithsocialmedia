import React from 'react';

function ProfileInfo({ profile, handleLogout }) {
  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.picture.data.url} alt={profile.name} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfileInfo;
