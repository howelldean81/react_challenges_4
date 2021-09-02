import React, { Component } from 'react';

export default class DogIndex extends Component {
    constructor() {
        super()
            this.state = {
            image: ''
        }
    }

    componentDidMount () {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            this.setState({
                image: data.message
            })
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.componentDidMount()
    }

    render() {
        return(
            <div>   
                <img src={this.state.image}/>
                <button onClick={(e) => this.handleSubmit(e)}>
                    Click me
                </button>
            </div>
        )
    }
}

