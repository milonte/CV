import React, { Component } from 'react'
import { ListGroup, Col, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home/Home/Home'
import About from './Home/About/About'
import Skills from './Home/Skills/Skills'

export default class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
               /*  <Col xs={12} md={2} xl={1} > */
            <div id="menu">
                <Navbar expand="md" id="navbar">
                    <Navbar.Brand>Milonte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto my-0 flex-column">
                            <Nav.Link><Link to="/">Accueil</Link></Nav.Link>
                            <Nav.Link><Link to="/presentation">Présentation</Link></Nav.Link>
                            <Nav.Link><Link to="/competences">Compétences</Link></Nav.Link>
                            <Nav.Link><Link to="/realisations">Réalisations</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Col xs={6} sm={3} md={2} id='menu'>
                    <ListGroup>
                        <ListGroup.Item>Milonte</ListGroup.Item>
                        <ListGroup.Item action href="#accueil">Accueil</ListGroup.Item>
                        <ListGroup.Item action href="#presentation">Présentation</ListGroup.Item>
                        <ListGroup.Item action href="#competences">Compétences</ListGroup.Item>
                        <ListGroup.Item action href="#realisations">Réalisations</ListGroup.Item>
                        <ListGroup.Item action href="#contact">Contact</ListGroup.Item>
                    </ListGroup>
                </Col> */}





                {/*   <Col xs={6} sm={3} md={2} id='menu'>
                    <ListGroup>
                        <ListGroup.Item>Milonte</ListGroup.Item>
                        <ListGroup.Item><Link to="/">Accueil</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="/presentation">Présentation</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="/competences">Compétences</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="/realisations">Réalisations</Link></ListGroup.Item>
                        <ListGroup.Item><Link to="/contact">Contact</Link></ListGroup.Item>
                    </ListGroup>
                </Col> */}


            </div>/* </Col> */
        )
    }
}
