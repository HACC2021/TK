import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import Reviews from '../components/Reviews';

function TrailDetails({ match }) {
    const [data, setData] = useState(null);
//     async function getData() {
//         const {data} = await Axios.get('http://localhost:5000/trails/' + match.params.trailName);
//         setData(data);
//         console.log(data);
//     }


    useEffect(() => {
            async function getData() {
                const {data} = await Axios.get('http://localhost:5000/trails/' + match.params.trailName);
                setData(data);
            }
        
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {data==null ?
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            :                
                <Container>
                    <h1>{data.name != null ? data.name : null}</h1>
                    <h2>{data.description != null ? data.description : 'There is currently no description!'}</h2>
                    {data.tags != null ? 
                        data.tags.map(tag => {
                            return(
                                <h4>{tag}</h4>
                            )
                        })
                    :
                        'There are no tags.'
                    }
                    <h3>{data.ratings != null ? data.ratings : 'No rating'}</h3>

                </Container>
            }
            <Container>
                <Reviews slugName={match.params.trailName}/>
            </Container>
        </div>
    )
}

export default TrailDetails;
