import React, { Component } from 'react'
import Cash from './Cash';


class Cantor extends Component {

    state = {
        amount: "",
        product: "electricity"

    }
    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'zloty',
                ratio: 1,
                title: 'Wartość w złotówkach'
            },
            {
                id: 1,
                name: 'dollar',
                ratio: 4.8291,
                title: 'Wartość w dolarach'
            },
            {
                id: 2,
                name: 'euro',
                ratio: 4.7107,
                title: 'Wartość w euro'
            },
            {
                id: 3,
                name: 'pount',
                ratio: 5.4330,
                title: 'Wartość w funtach'
            }

        ],
        prices: {
            electricity: .51,
            gas: 7.85,
            oranges: 3.99
        }
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount: ""
        })
    }

    insertSuffix(select) {
        if (select === "electricity") return <em>kWh</em>
        else if (select === "gas") return <em>litrów</em>
        else if (select === "oranges") return <em>kilogramów</em>
        else return null
    }

    selectPrice(select) {
        const price = this.props.prices[select]
        return price
    }

    render() {

        const { amount, product } = this.state;
        const calculators = this.props.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.title} cash={amount} price={this.selectPrice(product)} />
        ))

        return (
            <div className='cantor'>
                <hr />
                <h2 className='project'>Projekt 12</h2>
                <label>

                    <label>Wybierz produkt:
                        <select value={product} onChange={this.handleSelect} >
                            <option value="electricity">Prąd</option>
                            <option value="gas">Benzyna</option>
                            <option value="oranges">Pomarańcze</option>
                        </select>
                    </label>
                    <br />

                    <input
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                    {this.insertSuffix(this.state.product)}
                </label>

                {calculators}



            </div>
        )
    }
}

export default Cantor