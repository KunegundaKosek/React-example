import React, { Component } from 'react'
import '../App.css'

class Login extends Component {

    state = {
        city: "Warszawa",
        text: "",
        isLiked: false,
        number: "2"
    }

    handleChange = e => {
        // console.log(e.target.type)
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render() {
        return (
            <div>
                <hr />
                <h2 className='project'>Projekt 11</h2>
                <label>Podaj miasto
                    <input
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                        type="text"
                       
                    />
                </label>
                <br />

                <label>Napisz coś o tym mieście
                    <textarea
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    ></textarea>
                </label>
                <br />

                <label>
                    Czy lubisz to miasto?
                    <input
                        name="isLiked"
                        type="checkbox"
                        checked={this.state.isLiked}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>Ile razy byliście w tym mieście
                    <select
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                    >
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