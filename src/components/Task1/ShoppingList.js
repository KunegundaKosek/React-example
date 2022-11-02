import { React, Component } from 'react'
import '../App.css';

class ShoppingList extends Component {

    state = {
        items1: "tomato",
        items2: "cucumber",
        items3: "milk",
        items4: "chocolate",
        items5: "ice cream"
    }

    render() {
        return (
            <div >
                <hr></hr>
                <h2 className="project">Projekt 1</h2>
                <h4>Shopping List</h4>
                <ul className="shoppingList">
                    <li>{this.state.items1}</li>
                    <li>{this.state.items2}</li>
                    <li>{this.state.items3}</li>
                    <li>{this.state.items4}</li>
                    <li>{this.state.items5}</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList