import React, { Component } from 'react';
import '../App.css';

class FormValidation extends Component {

    state = {
        username: '',
        email: '',
        pass: '',
        accept: false,
        message: '',

        errors: {
            username: false,
            email: false,
            pass: false,
            accept: false,
        }
    }

    messages = {
        username_incorrect: "Nazwa musi być dłuższa niż 3 znaki i nie może zawierać spacji",
        email_incorrect: "Brak @ w emailu",
        password_incorrect: "Hasło musi mieć minimum 6 znaków",
        accept__incorrect: "Nie potwierdzona zgoda"
    }

    handleChange = (e) => {

        const name = e.target.name;
        const type = e.target.type;

        if (type === "text" || type === "password" || type === "email") {

            // console.log(type)
            const value = e.target.value;
            // const checked = e.target.checked;
            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            this.setState({
                [name]: checked
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const validation = this.formValidation();
        // console.log(validation)
        if (validation.correct) {
            this.setState({
                username: '',
                email: '',
                pass: '',
                accept: false,
                message: 'Formularz został wysłany',

                errors: {
                    username: false,
                    email: false,
                    pass: false,
                    accept: false,
                }
            })
            // console.log("form wyslany")
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email: !validation.email,
                    pass: !validation.password,
                    accept: !validation.accept,
                }
            })
        }
    }

    formValidation = () => {
        let username = false;
        let email = false;
        let password = false;
        let accept = false;
        let correct = false;

        if (this.state.username.length > 4 && this.state.username.indexOf(' ') === -1) {
            username = true;
        }
        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }
        if (this.state.pass.length >= 6) {
            password = true;
        }

        if (this.state.accept) {
            accept = true;
        }

        if (username && email && password && accept) {
            correct = true
        }
        return ({
            correct,
            username,
            email,
            password,
            accept
        })
    }

    componentDidUpdate() {
        // console.log("update")
        if (this.state.message !== '') {
            setTimeout(() => this.setState({
                message: ''
            }), 5000)
        }
    }

    render() {
        return (
            <div>
                <hr />
                <h2 className='project'>Projekt 16</h2>

                <form onSubmit={this.handleSubmit} noValidate >
                    <label htmlFor="user">Imię:
                        <input
                            type='text'
                            id='user'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        {this.state.errors.username && <span className='span'>{this.messages.username_incorrect}</span>}
                    </label>

                    <label htmlFor="email">Adres email:
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        {this.state.errors.email && <span className='span'>{this.messages.email_incorrect}</span>}
                    </label>

                    <label htmlFor="password">Hasło:
                        <input
                            type='password'
                            id='password'
                            name='pass'
                            value={this.state.pass}
                            onChange={this.handleChange}
                        />
                        {this.state.errors.pass && <span className='span'>{this.messages.password_incorrect}</span>}
                    </label>

                    <label htmlFor="accept" >
                        <input
                            type="checkbox"
                            id="accept"
                            name="accept"
                            checked={this.state.accept}
                            onChange={this.handleChange}
                        /> Wyrażam zgodę
                    </label>
                    {this.state.errors.accept && <span className='span'>{this.messages.accept__incorrect}</span>}
                    <button >Wyślij</button>

                </form>
                    {this.state.message && <h5>{this.state.message}</h5>}
            </div>
        )
    }
}

export default FormValidation