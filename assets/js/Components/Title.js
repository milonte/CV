import React, { Component } from 'react'

export class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='title_component'>
                <h1 className='title'>{this.props.title}</h1>
                <span className='title_over'>{this.props.title}</span>
                <span className="description">{this.props.description}</span>
            </div>
        )
    }
}

export default Title
