import React from "react";
import {Card, Button} from "react-bootstrap";

function ImageCard (props) {


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
            <Card.Title>{props.title.toUpperCase()}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary" onClick={() => props.handleDelete(props.id)}>Delete</Button>
        </Card.Body>
        </Card>
    )

};

export default ImageCard;