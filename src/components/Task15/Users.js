import React, { Component } from 'react'
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';

const API = 'https://randomuser.me/api/?results=1'

class Users extends Component {

    state = {
        users: []
    }

    // pusta tablica po konwersji na bool daje nam true

    handleDataFetch = () => {
        // console.log("click")
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const user = data.results
                this.setState(prevState => ({
                    users: prevState.users.concat(user)
                }))
            })
            .catch(error => console.log(error))

    }

    render() {
        const users = this.state.users
        return (
            <div>
                <hr />
                <h2 className='project'>Projekt 15</h2>
                <ButtonFetchUsers click={this.handleDataFetch} />
                {users.length > 0 ? <UsersList users={users} /> : users}
            </div>
        )
    }
}

export default Users