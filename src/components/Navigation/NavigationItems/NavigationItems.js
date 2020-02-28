import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
  return (
    <div>
      <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active >Burger Builder</NavigationItem>
        <NavigationItem link='/orders' >Orders</NavigationItem>
      </ul>
    </div>
  )
}

export default NavigationItems
