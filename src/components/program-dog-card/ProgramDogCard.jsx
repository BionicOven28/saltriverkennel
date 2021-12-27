import React from 'react';
import Card from 'react-bootstrap/Card';

import './program-dog-card.css';

class ProgramDogCard extends React.Component {
    render() {
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/dog-children-s-drawing-colored-illustration-cute-31197401.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        )
    }
};

export default ProgramDogCard;