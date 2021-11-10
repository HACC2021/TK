import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import AuthContext from '../store/auth-context';
import Spinner from 'react-bootstrap/Spinner';

function Profile() {

    const authCtx = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    const getData = async () => {
        const { data } = await Axios.post('http://localhost:5000/users/profile', {},
        { headers: {
            'authorization': `Bearer ${authCtx.token}`,
        }});
        setLoading(false);
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, )

    return (
        <div>
            {isLoading ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            :
                null
            }
        </div>
    )
}

export default Profile;
