import { React, Component } from 'react';
import '../App.css';

// Przycisk - po kliknięciu dodawana jest litera do tekstu

class AddSign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "o"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // state = {
  //   text: "o"
  // }

  handleClick = () => {
    const letter = "o"
    // this.setState({
    //   text: this.state.text + letter
    // })

    this.setState(() => ({
      text: this.state.text + letter
    })
    )
  }


  render() {
    return (
      <div>
        <hr></hr>
        <h2 className="project">Projekt 2</h2>
        <button onClick={this.handleClick}>Dodaj "o"</button>
        <h4>{this.state.text}</h4>
      </div>
    )
  }
}



export default AddSign