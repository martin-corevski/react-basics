import React from 'react'
import classes from './Comp3.scss'
import hocFunc from '../../hoc/hocFunc'
import Aux from '../../hoc/HigherOrderComp'

/**
 * This is an example of Stateless (functional) component. Since this is
 * functional component, not a class, this keyword is not available
 * @param  {object} props Contains whatever the parent component sends as prop
 * @return {jsx} Returns "html"
 */
const comp3 = props => {
  return (
    <Aux>
      <h4>This is function component 3 with props.children:</h4>
      <h5>{props.children}</h5>
    </Aux>
  )
}

export default hocFunc(comp3, classes.bordersAll)
