import React, { Component } from 'react'
import { Card, CardGroup, Image, Col, Row } from 'react-bootstrap';

export class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardGroup>
                {this.props.project.pictures.map(img => {
                    return (
                        <Card className="one_project_card">
                            <Row noGutters>

                                <Col xs={12} md={2}>
                                    <div className="picture-handler my-auto">
                                        <Image className="project_picture" src={img} />
                                    </div>
                                </Col>

                                <Col xs={12} md={10} >
                                    <Row noGutters>
                                        <Col xs={11}>
                                            <Card.Header className="text-center">{this.props.project.name}  {this.props.project.date.date}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    {this.props.project.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>OUIIII</Card.Footer>
                                        </Col>

                                        <Col xs={1} className="project_link">
                                            <div className="project_link_website">S</div>
                                            <div className="project_link_github">G</div>
                                            <div className="project_link_show">G</div>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Card>
                    )
                })}
            </CardGroup>
        )
    }
}

export default ProjectCard
