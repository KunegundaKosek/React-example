import React, { Component } from 'react';
import '../App.css';

// Warunkowe dodanie przycisku i obsługa stanu magazynu
// wyszarzenie liczby 0 - css
// destrukturyzacja

class ShoppingCart extends Component {

    state = {
        availableProducts: 7,
        cart: 1,
    }

    handleRemoveFromCart = () => {
        this.setState({
            cart: this.state.cart - 1
        })
    }

    handleAddToCart = () => {
        this.setState({
            cart: this.state.cart + 1
        })
    }

    handleBuy = () => {
        // console.log("bought")
        this.setState({
            availableProducts: this.state.availableProducts - this.state.cart,
            cart: 0
        })
    }

    render() {

        const { cart, availableProducts } = this.state;

        const style = cart === 0 ? { opacity: 0.3 } : {}

        return (
            <div className="container">
                <hr />
                <h2 className="project">Projekt 9</h2>
                <button
                    disabled={cart ? false : true}
                    className="plusMinus"
                    onClick={this.handleRemoveFromCart}>-</button>

                <span style={style} > {cart} </span>

                <button
                    disabled={cart === availableProducts ? true : false}
                    onClick={this.handleAddToCart}
                    className="plusMinus" >+</button>
                {cart > 0 && <button onClick={this.handleBuy} className="buy">Kup</button>}
            </div>
        )
    }
}

export default ShoppingCart;