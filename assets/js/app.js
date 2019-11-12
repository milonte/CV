/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
const $ = require('jquery');
require('bootstrap');

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');


import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import Projects from './Components/Projects';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            realisations: []
        };
    }

    render() {
        return (

            <Container fluid>
                <Tab.Container defaultActiveKey="#presentation">
                    <Row>
                        <Col xs={6} sm={3} md={2} id='menu'>
                            <ListGroup>
                                <ListGroup.Item>Milonte</ListGroup.Item>
                                <ListGroup.Item action href="#presentation">Présentation</ListGroup.Item>
                                <ListGroup.Item action href="#realisations">Réalisations</ListGroup.Item>
                                <ListGroup.Item action href="#competences">Compétences</ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col xs={12} sm={9} md={9} id="content">
                            <Tab.Content id="tab-content">
                                <Tab.Pane eventKey="#presentation">presentation</Tab.Pane>
                                <Tab.Pane eventKey="#realisations">
                                    <Projects />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#competences">competences</Tab.Pane>
                            </Tab.Content>
                        </Col>

                </Row>
                </Tab.Container>
            </Container>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

