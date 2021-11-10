import React, { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import AuthContext from '../store/auth-context';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Profile() {

    const authCtx = useContext(AuthContext);
    const [data, setData] = useState(null);
    async function getData() {
        const { data } = await Axios.post('http://localhost:5000/users/profile', {},
        { headers: {
            'authorization': `Bearer ${authCtx.token}`,
        }});
        setData(data);
    }

    useEffect(() => {
        getData();
    }, )


    return (
        <div>
            {data==null ? 
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            :
                <Container>
                    <div>
                        <h4>{data.username}</h4>
                        <div>
                            <h5>First name: {data.firstName == null ? data.firstName :'n/a'}</h5>
                            <h5>Last name: {data.lastName == null ? data.lastName :'n/a'}</h5>
                            <h5>Email: {data.email}</h5>
                        </div>
                    </div>
                </Container>
            }
        </div>
    )
}

export default Profile;
