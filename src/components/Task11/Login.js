import React, { Component } from 'react'
import '../App.css'

class Login extends Component {

    state = {
        city: "Warszawa",
        text: "",
        isLiked: false,
        number: "2"
    }

    hanldeCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    hanldeTextChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleLikeChange = e => {
        this.setState({
            isLiked: e.target.checked
        })
    }

    handleVisitsNumberChange(e) {
        this.setState({
            number: e.target.value
        })
    }



    render() {
        return (
            <div>
                <hr />
                <h2 className='project'>Projekt 11</h2>
                <label>Podaj miasto
                    <input
                        value={this.state.city}
                        type="text"
                        onChange={this.hanldeCityChange}
                        className='login'
                    ></input>
                </label>
                <br />

                <label>Napisz coś o swoim mieście
                    <textarea className='login' value={this.state.text} onChange={this.hanldeTextChange}></textarea>
                </label>
                <br />

                <label>
                    Czy lubisz to miasto?
                    <input className='login' type="checkbox" checked={this.state.isLiked} onChange={this.handleLikeChange} />
                </label>
                <br />

                <label>Ile razy byliście w tym mieście
                    <select value={this.state.number} onChange={this.handleVisitsNumberChange.bind(this)} >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="more">więcej</option>

                    </select>
                </label>


            </div>
        )
    }
}

export default Login