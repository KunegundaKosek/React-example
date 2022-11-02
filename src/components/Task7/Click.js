import { React, Component } from 'react';
import MathButton from './MathButton';
import ResultPanel from './ResultPanel';
import '../App.css';

class Click extends Component {

    state = {
        count: 0,
        result: this.props.result
    }

    handleMathClick = (type, number = 1) => {
        // debugger
        if (type === "subtraction") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: this.props.result
            }))
        } else if (type === "add") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }

    render() {
        return (
            <>
                <hr></hr>
                <h2 className="project">Projekt 7</h2>

                {/* <button onClick={this.handleMathClick.bind(this, "subtraction", 10)} >-10</button>
                <button onClick={() => this.handleMathClick("subtraction", 1)} >-1</button>
                <button onClick={this.handleMathClick.bind(this, "reset", 0)} >Reset</button>
                <button onClick={this.handleMathClick.bind(this, "add", 1)} >+1</button>
                <button onClick={this.handleMathClick.bind(this, "add", 10)}>+10</button> */}
                <div className="btnLine">
                    <MathButton
                        name="-5"
                        number="5"
                        type="subtraction"
                        click={this.handleMathClick}
                    />

                    <MathButton
                        name="1"
                        number="1"
                        type="subtraction"
                        click={this.handleMathClick}
                    />

                    <MathButton
                        name="reset"
                        type="reset"
                        click={this.handleMathClick}
                    />

                    <MathButton
                        name="+1"
                        number="1"
                        type="add"
                        click={this.handleMathClick}
                    />

                    <MathButton
                        name="+5"
                        number="5"
                        type="add"
                        click={this.handleMathClick}
                    />
                </div>

                {/* <h4>Liczba kliknięć: {this.state.count}</h4>
                <h4>Wynik: {this.state.result} </h4> */}
                <ResultPanel count={this.state.count} result={this.state.result} />

            </>
        )
    }
}

export default Click