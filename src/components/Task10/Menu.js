import { React, Component } from 'react'
import Header from './Header';
import ListItems from './ListItems';
import '../App.css';

class Menu extends Component {

    state = {
        items: [
            { id: 1, name: "ziemniaki", active: false },
            { id: 2, name: "kasza", active: false },
            { id: 3, name: "ryba", active: false },
            { id: 4, name: "kurczak", active: false },
            { id: 5, name: "herbata", active: false },
            { id: 6, name: "woda", active: false },

        ],
    }

    handleChangeStatus = (id) => {
        // console.log(id);

        const items = this.state.items.map(item => {
            if (id === item.id) {
                item.active = !item.active
            }
            return item
        })

        this.setState({
            items
        })
    }

    render() {

        const food = this.state.items
        return (
            <div>
                <hr />
                <h2 className="project">Projekt 10</h2>
                <Header items={food} />
                <ListItems items={food} changeStatus={this.handleChangeStatus} />
            </div>
        )
    }
}

export default Menu