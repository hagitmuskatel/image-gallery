import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

function Search(props) {

    return (
        <Container className="mt-3">
            <Row  className="justify-content-center">
                <Col md={8} lg={8} xs={12}>
                <Form className="d-flex" onSubmit={props.onSubmitSearch}>
                    <Form.Control
                    type="text"
                    placeholder="Search for new image"
                    className="me-2"
                    aria-label="Search"
                    value={props.searchText}
                    onChange={props.setSearchText}
                    />
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;