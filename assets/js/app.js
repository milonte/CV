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
import Projects from './Components/Home/Projects/Projects';
import Skills from './Components/Home/Skills/Skills';
import Contact from './Components/Home/Contact/Contact';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home/Home';

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
                <Tab.Container defaultActiveKey="#accueil">
                    <Row>
                        <Col xs={6} sm={3} md={2} id='menu'>
                            <ListGroup>
                                <ListGroup.Item>Milonte</ListGroup.Item>
                                <ListGroup.Item action href="#accueil">Accueil</ListGroup.Item>
                                <ListGroup.Item action href="#presentation">Présentation</ListGroup.Item>
                                <ListGroup.Item action href="#competences">Compétences</ListGroup.Item>
                                <ListGroup.Item action href="#realisations">Réalisations</ListGroup.Item>
                                <ListGroup.Item action href="#contact">Contact</ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col xs={12} sm={9} md={9} id="content">
                            <Tab.Content id="tab-content">
                                <Tab.Pane eventKey="#accueil" mountOnEnter={true}>
                                    <Home />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#presentation" mountOnEnter={true}>
                                    <About />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#competences" mountOnEnter={true}>
                                    <Skills />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#realisations" mountOnEnter={true}>
                                    <Projects />
                                </Tab.Pane>
                                <Tab.Pane eventKey="#contact" mountOnEnter={true}>
                                    <Contact />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

