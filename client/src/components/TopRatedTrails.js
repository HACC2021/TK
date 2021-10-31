import TrailsInfoCard from "./TrailsInfoCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopRatedTrails() {
    return (
        <div className="top-rated-trails">
            <h1 style={{ marginBottom: "1rem" }}>Top Rated Trails</h1>
            <Row>
                <Col md={true}>
                    <TrailsInfoCard />
                </Col>
                <Col md={true}>
                    <TrailsInfoCard />
                </Col>
                <Col md={true}>
                    <TrailsInfoCard />
                </Col>
            </Row>
        </div>
    )
}

export default TopRatedTrails;
