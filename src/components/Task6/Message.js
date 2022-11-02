import React, { Component } from 'react';
import '../App.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleMessageClick = this.handleMessageClick.bind(this);
    }

    handleMessageClick() {
        // debugger
        this.setState(() => ({
            messageIsActive: !this.state.messageIsActive
        }))
    }

    render() {
        // console.log(this.state.messageIsActive);

        const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

        return (
            <React.Fragment>
                <hr></hr>
                <h2 className="project">Projekt 6</h2>
                <button onClick={this.handleMessageClick}>
                    {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
                </button>
                {/*sposób 1: <p>{ this.state.messageIsActive && text }</p> */}
                {/*sposób 2: {this.state.messageIsActive && <p>{text}</p>} */}
                {this.state.messageIsActive ? <p>{text}</p> : null}
            </React.Fragment>
        )
    }
}

export default Message