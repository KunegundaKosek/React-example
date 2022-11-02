import { React, Component } from 'react'
import '../App.css';

class Copy extends Component {

    state = {
        value: ""
    }

    handleInputChange = (e) => {
        // console.log("Zawartość w evencie: " + e.target.value);
        // console.log("Zawartość value przed setState: " + this.state.value);
        this.setState({
            value: e.target.value
        })
        // console.log("Zawartość value przed setState: " + this.state.value);
    }

    handleClick = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        // console.log("Zawartość value w trakcie metody render: " + this.state.value);

        return (
            <div>
                <hr></hr>
                <h2 className="project">Projekt 5</h2>
                <input value={this.state.value} placeholder='wpisz tekst' onChange={this.handleInputChange} type="text" />
                <button onClick={this.handleClick} className="btn">Reset</button>
                <h4 className="title">{this.state.value.toLocaleUpperCase()}</h4>

            </div>
        )
    }
}

export default Copy;