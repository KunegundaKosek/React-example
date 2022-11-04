import React, { Component } from 'react'

//Przykład setState

class Clicker extends Component {

    state = {
        number1: 0,
        number2: 0,
        number3: 0
    }

    handleClick1 = () => {
        this.setState({
            number1: this.state.number1 + 1
        })
        // console.log(this.state.number1, "w metodzie handleClick")
    }

    handleClick2 = () => {
        this.setState({
            number2: this.state.number2 + 3
        })
        this.setState({
            number2: this.state.number2 + 3
        })
        this.setState({
            number2: this.state.number2 + 3
        })
        // console.log(this.state.number2, "w metodzie handleClick")

    }

    handleClick3 = () => {
        this.setState(() => ({
            number3: this.state.number3 + 1,
        }))
        this.setState(() => ({
            number3: this.state.number3 + 1,
        }))
        this.setState(() => ({
            number3: this.state.number3 + 1,
        }))
        // console.log(this.state.number3)
    }

    render() {
        // console.log(this.state.number2, "w render")

        return (
            <div>
                <hr />
                <h2 className='project'>Projekt 14</h2>
                <button onClick={this.handleClick1} >+1</button>
                <h4>{this.state.number1}</h4>

                <button onClick={this.handleClick2} >+3</button>
                <h4>{this.state.number2}</h4>

                <button onClick={this.handleClick3} >+3</button>
                <h4>{this.state.number3}</h4>
            </div>
        )
    }
}

export default Clicker