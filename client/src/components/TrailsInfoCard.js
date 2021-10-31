import Card from 'react-bootstrap/Card';

function TrailsInfoCard() {
    return (
        <Card border="success" className="trails-info-card">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TrailsInfoCard;
