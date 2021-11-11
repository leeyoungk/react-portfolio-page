import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
export default function Project() {
    return (
        
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Project1</Card.Header>
        <Card.Body>
        <Card.Title>Title:  P6MRDb</Card.Title>
        <Card.Text>
        This is my first group project at the bootcamp.The goal of this project was to build a webapp which allowed users to search for movie titles and then find reviews of those movies.
        </Card.Text>
        </Card.Body>
        </Card>
        <Container>
        <Row>
            <Col xs={6} md={4}>
            <Image src="holder.js/171x180" rounded />
            </Col>
        </Row>
    </Container>
    )
    

}