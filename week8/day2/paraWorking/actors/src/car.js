import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'Gris Nardo',
            speed: 0
        };
    }

    accelerate = () => {
        let currentSpeed = this.state.speed;
        let newSpeed = currentSpeed + 10;
        this.setState({
            speed: newSpeed
        });
    };

    decelerate = () => {
        let currentSpeed = this.state.speed;
        let newSpeed = currentSpeed - 10;
        if (newSpeed < 0) {
            newSpeed = 0;
        }
        this.setState({
            speed: newSpeed
        });
    }

    render() {
        if (this.state.speed > 100) {
            alert("You're speeding as Hell bro!");
        }
        
        return (
            <div>
                <h1>
                    I am a Hellcat of color {this.state.color} and I'm speeding at {this.state.speed}
                </h1>
                
                <button onClick={this.accelerate}>Accelerate</button>
                <button onClick={this.decelerate}>Brake</button>
            </div>
        );
    }
}

export default Car;
