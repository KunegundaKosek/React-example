import React from 'react'

const Foods = (props) => {
  return (
    <li

      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.name}
    </li>
  )
}


export default Foods;