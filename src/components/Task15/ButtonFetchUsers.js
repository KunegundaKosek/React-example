import React from 'react'

const ButtonFetchUsers = (props) => {
    return (
        <button style={{
            backgroundColor: 'white',
            padding: '10px 20px',
            border: '2px solid black',
            margin: 20
        }}
            onClick={props.click} >Dodaj użytkownika
        </button>
    )
}

export default ButtonFetchUsers