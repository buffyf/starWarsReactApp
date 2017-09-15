import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            pilot: ""
        }
    }


    // handle input changes- event handler

    handleNameChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    //  submit- event handler for the button

    handleFormSubmit = e => {
        e.preventDefault();
        let pilot = this.state.value;

        this.setState({  // resets the value - clears the search box
            value: "",
            pilot: pilot
        })
    }

    render() {
        let value = this.state.value;
        return (
            <div>
                <h2>{this.props.label}</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input onChange={this.handleNameChange}
                        type="text"
                        name="value"
                        value={value}
                        placeholder="Enter your name"
                    />

                    <button type="submit">Submit</button>
                </form>
                <h2>{this.state.pilot}</h2>
            </div>
        )
    }
}