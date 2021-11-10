import React, {useEffect, useState} from 'react'
import Axios from 'axios';


function Reviews({slugName}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const {data} = await Axios.get('http://localhost:5000/reviews/' + slugName);
            setData(data);
            console.log(data);
        }
    
    getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return (
        <div>
            <h1>Reviews</h1>
            {data != null ?
                data.map(review => {
                    return (
                        <div>
                            <h3>{review.rating}/5</h3>
                            <h4>{review.review}</h4>
                        </div>
                    )
                })
            :
                <h1>No reviews</h1>
            }
        </div>
    )
}

export default Reviews
