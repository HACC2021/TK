import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


function TrailsInfoCard({data}) {
    return (
        <div>
        {data != null ?
            data.map(trail => {
                const route = '/details/' + trail.slugName;
                return(
                    <Link to={route}>
                        <Card className="trails-info-card">
                            <Card.Body>
                                <Card.Title>{trail.name}</Card.Title>
                                <Card.Text>
                                {trail.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
            )})
        :
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        }
        </div>
    )
}

export default TrailsInfoCard;
