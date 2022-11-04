import React from 'react'

const Cash = (props) => {
    const value = (props.cash / props.ratio * props.price).toFixed(2);
  return (
      <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

export default Cash