import React from 'react'

const Form = (props) => {
    const { submit, isConfirmed, change } = props
    return (
        <div>
            <form onSubmit={submit} >
                <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
                <label htmlFor="age" >Mam co najmniej 15 lat</label>
                <br />
                <button type="submit" >Kup bilet</button>
            </form>
        </div>
    )
}

export default Form