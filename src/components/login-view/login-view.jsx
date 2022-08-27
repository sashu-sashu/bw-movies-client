import React, { useState } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import { Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //mocked movies response (from dist/movies.json)
  axios.get('./movies.json').then(response => {
    console.log(response.data)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */

    console.log(username, password, props)
    console.log('will send data to server when api app will work')
    // axios
    //   .post('https://bw-movies-server.herokuapp.com/login', {
    //     Username: username,
    //     Password: password,
    //   })
    //   .then((response) => {
    //     const data = response.data;
    //     props.onLoggedIn(data);
    //   })
    //   .catch((e) => {
    //     console.log(e.target,'no such user');
    //   });
  };

  return (
    <Container fluid className="loginContainer my-3 mx-12 ">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Top 10 BW Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body className="mt-3 ">
                <Card.Title>Welcome to Top 10 BW Movies</Card.Title>
                <Form>
                  <Form.Group controlId="formUserName">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Enter Username"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Button className="mt-3" variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};