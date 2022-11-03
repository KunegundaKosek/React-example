import React from 'react'

const Header = (props) => {

    const activeItems = props.items.filter(item => item.active);
    const number = activeItems.length

  return (
      <header>
          <h4>Wielkość zamówienia: {number}</h4>
          <h4>{number ? `Do zapłaty: ${number * 10}zł` : "nic nie kupiłeś"}</h4>
    </header>
  )
}

export default Header