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
import Menu from './Components/Menu';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectShow from './Components/Home/Projects/ProjectShow';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
                
        }

        
    }

    render() {

        return (

            <div>
                <Router>
                    <Row noGutters>
                        <Menu />
                       {/*  <Col xs={12} md={9} lg={10} xl={11}> */}
                        <div id="content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/presentation" component={About} />
                                <Route path="/competences" component={Skills} />
                                <Route path="/realisations">
                                    <Projects projects={this.state.projects} />
                                </Route>
                                <Route path="/contact" component={Contact} />
                                <Route path="/project/:projectName" component={ProjectShow} />

                            </Switch>

                        </div>{/* </Col> */}
                    </Row>
                </Router>
            </div>

        );

    }
}

ReactDOM.render(<App />, document.getElementById('root'));

