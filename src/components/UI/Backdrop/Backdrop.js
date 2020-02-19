import React from 'react'
import classes from './Backdrop.module.css'
// import PropTypes from 'prop-types'

const Backdrop = props => {
  return (
    props.show ?
    <div className={classes.Backdrop} onClick={props.clicked}>
      
    </div>
    : null
  )
}

// Backdrop.propTypes = {

// }

export default Backdrop
