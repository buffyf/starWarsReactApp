import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }

    }
    render() {
        return (
            <div>
                <h3>{this.props.label}</h3>
                <input type="text" placeholder="Enter your name" />
                <button type="submit">Submit</button>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
