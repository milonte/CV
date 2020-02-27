import React, { Component } from 'react'
import { Container, Card, CardGroup, Image, Col, Row, Button } from 'react-bootstrap';

export class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picturesPath: "../pictures/",
        }

        this.showCardInfos = this.showCardInfos.bind(this);
        this.hideCardInfos = this.hideCardInfos.bind(this);
    }


    showCardInfos(e) {
        e.currentTarget.lastElementChild.hidden = false;
    }

    hideCardInfos(e) {
        e.currentTarget.lastElementChild.hidden = true;
    }

    render() {
        return (

            <CardGroup>
                <Card className="one_project_card text-white text-center" onMouseOver={this.showCardInfos} onMouseLeave={this.hideCardInfos}>
                    <Card.Img className="project_picture" src={this.state.picturesPath + this.props.project.pictures[0]} alt="Card image" />
                    <Card.ImgOverlay hidden={true}>
                        <Card.Title>{this.props.project.name}</Card.Title>
                        <Card.Text>
                            {this.props.project.description}
                        </Card.Text>
                        <Card.Text className="justify-content-around">
                            <Button variant="success" href={'project/' + this.props.project.name}>Détails</Button>
                            <Button variant="primary" href="#test">Site web</Button>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>

        )
    }
}

export default ProjectCard
