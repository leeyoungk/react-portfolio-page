import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export default function Project() {
    return (
        <>
        <Card border="primary" style={{ width: '18rem' }}>
        <Row>
            <Col xs={6} md={4}>
            <Image src="project1.png/171x180" rounded />
            </Col>
        </Row>
        <Button variant="primary" href="https://rsimer.github.io/P6MRDb/" target="_blank" alt ="Go to Project 1" class="link-folder">Live Site</Button>{' '}
        <Button variant="secondary" href="https://github.com/RSimer/Project-1" target="_blank" alt ="Go to Project 1" class="link-folder">GitHub Repo</Button>{' '}
        <Card.Header>Project1</Card.Header>
        <Card.Body>
        <Card.Title>Title:  P6MRDb</Card.Title>
        <Card.Text>
            This is my first group project at the bootcamp.The goal of this project was to build a webapp which allowed users to search for movie titles and then find reviews of those movies.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '18rem' }}>
        <Row>
            <Col xs={6} md={4}>
            <Image src="project2.png/171x180" rounded />
            </Col>
        </Row>
        <Button variant="primary" href=" https://cup-of-sugear.herokuapp.com/" target="_blank" alt ="Go to Project 2" class="link-folder">Live Site</Button>{' '}
        <Button variant="secondary" href="https://github.com/AdrianCronin/Cup-of-Sugear" target="_blank" alt ="Go to Project 2" class="link-folder">GitHub Repo</Button>{' '}
        <Card.Header>Project2</Card.Header>
        <Card.Body>
        <Card.Title>Title: SuGear</Card.Title>
        <Card.Text>
        This is my first group project at the bootcamp.This project was created to explore MVC features, by creating an application that allows neighbors to exchange gear including homewares, sports equipment and lawn equipment
        </Card.Text>
        </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '18rem' }}>
        <Row>
            <Col xs={6} md={4}>
            <Image src="project2.png/171x180" rounded />
            </Col>
        </Row>
        <Button variant="primary" href=" https://beatmaker206.herokuapp.com/" target="_blank" alt ="Go to Project 2" class="link-folder">Live Site</Button>{' '}
        <Button variant="secondary" href="https://github.com/Project-3-Crew/beatMaker" target="_blank" alt ="Go to Project 2" class="link-folder">GitHub Repo</Button>{' '}
        <Card.Header>Project3</Card.Header>
        <Card.Body>
        <Card.Title>Title: BeatMaker</Card.Title>
        <Card.Text>
        This is my third group project at the bootcamp. Beat Maker allows users experiment with different sound mashups and users can create their desired beat or they can save the beats to their account and come back later to play with them.
        </Card.Text>
        </Card.Body>
        </Card>
        

        
        
        </>
    )
    
    

}