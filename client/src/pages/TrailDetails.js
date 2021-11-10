import React from 'react'
import Container from 'react-bootstrap/Container'

function TrailDetails({ match }) {
    return (
        <Container>
            <h1>{match.params.trailName}</h1>
        </Container>
    )
}

export default TrailDetails;
