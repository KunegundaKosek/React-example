import React from 'react'

const ResultPanel = (props) => {
    return (
        <div>
            <h4>Liczba kliknięć: {props.count}{ props.count > 10 ? <span>. Przeciążenie procesora!</span> : null }</h4>
            <h4>Wynik: {props.result} </h4>
        </div>
    )
}

export default ResultPanel