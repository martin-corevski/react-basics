import React from 'react'
import PropTypes from 'prop-types'

/**
 * This is an example of Stateless (functional) components
 * @param  {object} props Contains whatever the parent component sends as prop
 * @return {jsx} Returns "html"
 */
const comp1 = props => {
  return (
    <div>
      <p>{props.pname} to you for using props!</p>
      {/* Every time we change the input value the stateChangeHandler method will
        be triggered and consequently the state will be updated, i.e. stateProp
        will have new value */}
      <input value={props.stateProp} onChange={props.change} />
    </div>
  )
}

// propTypes evaluates props sent from the parent component, if a wrong type is
// supplied or pname prop is undefined a warning is shown in JS console (dev only)
// https://reactjs.org/docs/typechecking-with-proptypes.html
comp1.propTypes = {
  pname: PropTypes.string.isRequired,
  stateProp: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}

export default comp1
