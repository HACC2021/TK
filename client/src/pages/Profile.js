import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';

function Profile() {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <div>
            {isLoggedIn ? <h1>I'm logged in!</h1> : <h1>I'm not logged in.</h1>}
        </div>
    )
}

export default Profile;
