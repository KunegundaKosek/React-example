import { React, Component } from 'react';
import '../App.css';

// Funkcja strzałkowa a deklarowanie metody. Bind
// setState - przekazanie do metody obiektu i funkcji
// definiowanie state w konstruktorze

class AddSign2 extends Component {

  state = {
    text: "a"
  }

  handleClick() {
    const letter = "a"
    this.setState({
      text: this.state.text + letter
    })
  }

  render() {
    return (
      <div>
        <hr></hr>
        <h2 className="project">Projekt 3</h2>
        <button onClick={this.handleClick.bind(this)}>Dodaj "a"</button>
        <h4>{this.state.text}</h4>
      </div>
    )
  }
}

export default AddSign2