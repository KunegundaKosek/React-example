import { React, Component } from 'react'
import '../App.css';
import Panel from './Panel';

// Nowy komponent wyświtlanie cyfr
// losowanie liczby
// wyświetlanie nazwy przycisku z obiektu props, ze zmiennej bezpośrednio lib z obiektu state

class AddSign3 extends Component {

    state = {
        text: "."
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10)
        this.setState({
            text: this.state.text + number
        })
    }

    render() {
        return (
            <>
                <hr></hr>
                <h2 className="project">Projekt 4</h2>

                <button onClick={this.handleClick}>{ this.props.btnTitle }</button>
                <Panel text={this.state.text} />
            </>
        )
    }
}

export default AddSign3