import React from 'react'
import classes from './Comp3.scss'
import hocFunc from '../_hoc/hocFunc'
import Aux from '../_hoc/HigherOrderComp'

// The function component doesn't extend React.Component which means it doesn't
// have state and since it's not a class it doesn't use this keyword.
const comp3 = props => {
  return (
    <Aux>
      <h4>This is function component 3 with props.children:</h4>
      <h5>{props.children}</h5>
    </Aux>
  )
}

export default hocFunc(comp3, classes.bordersAll)
