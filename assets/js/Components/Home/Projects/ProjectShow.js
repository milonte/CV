import React, { Component } from 'react'
import Title from '../../Title'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Container } from 'react-bootstrap'

export default class ProjectShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: this.props.location.state.project,
        }
    }

    renderImages() {
        return (
            <div>
                {this.state.project.pictures.map(pic => {
                    return (
                        <Image fluid thumbnail src={"../pictures/" + pic} alt="Card image" key={pic}></Image>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <Title title={this.state.project.name} description={this.state.project.shortDescription} />
                <Link to={'/realisations'}>Retour à la liste</Link>
                <Row noGutters>
                    <Col xl={3} lg={4} md={5} ms={12} className="text-center">
                        <Container>
                            {this.renderImages()}
                        </Container>
                    </Col>
                    <Col className="text-center">
                        <Container className="project_description">
                            {this.state.project.description}
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}
