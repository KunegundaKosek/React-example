import React from 'react'

const MathButton = (props) => {
    // console.log(props)
    const number = parseInt(props.number);
    return (
      <div>
          <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    </div>
  )
}

export default MathButton;