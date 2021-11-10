import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Container from 'react-bootstrap/Container'
import TrailsInfoCard from '../components/TrailsInfoCard';


function AllTrails() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const {data} = await Axios.get('http://localhost:5000/trails/all');
            setData(data);
        }
    
    getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return (
        <div>
            <Container>
                <TrailsInfoCard 
                    data={data}
                />
            </Container>
        </div>
    )
}

export default AllTrails
