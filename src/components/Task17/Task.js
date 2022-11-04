import React from 'react'

const Task = (props) => {
    const { text, date, id } = props.task
    return (
        <div>
            <p>
                <strong>{text} - do <span className='spanToDo'>{date} </span> </strong>
                <button onClick={() => props.change(id)} >Zostało zrobione</button>
                <button onClick={() => props.delete(id)} >X</button>
            </p>
        </div>
    )
}

export default Task