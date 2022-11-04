import React, { Component } from 'react'

//Jeden komponent
// zobacz tekst, losuj jedną z trzech tekstów
class RandomText extends Component {

    state = {
        options: ["1", "2", "3"],
        option: null,
        value: ""
    }


    handleClick = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        this.setState({
            option: this.state.options[index]
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleAddClick = () => {
        if (this.state.value === "") return alert('wpisz coś!')
        const options = [...this.state.options]
        options.push(this.state.value)
        this.setState({
            options,
            value: ''
        })
        alert(`Tekst dodany. Akrualne teksty: ${options}`)
    }

    render() {


        return (
            <>
                <hr />
                <h2 className='project'>Projekt 13</h2>

                <input onChange={this.handleChange} value={this.state.value} ></input>
                <button onClick={this.handleAddClick} >Dodaj swój tekst</button>
                <button onClick={this.handleClick} >Losuj tekst</button>
                {this.state.option ? <h1> {this.state.option} </h1> : null}


            </>
        )

    }
}
export default RandomText