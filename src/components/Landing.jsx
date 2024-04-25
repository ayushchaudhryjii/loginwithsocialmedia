import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsername, selectEmail } from './userSlice';

export default function Landing() {
    const username = useSelector(selectUsername);
    const email = useSelector(selectEmail);

    return (
        <div>
            <h1>Welcome {username}</h1>
            <p> your Email id iS: {email}</p>
        </div>
    );
}
