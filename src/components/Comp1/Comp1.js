import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * This is an example of Stateless (NOT functional) component,
 * similar to Stateful but without state to manage
 * @extends Component
 * @type {Object}
 */
export default class Comp1 extends Component {
  componentDidMount () {
    console.log('[Comp1.js] componentDidMount!')
    this.inputElement.focus()
  }

  render () {
    return (
      <div>
        <p>{this.props.pname} to you for using props!</p>
        {/* Every time we change the input value the stateChangeHandler method
          will be triggered and consequently the state will be updated, i.e.
          stateProp will have new value. ref is used for manipulating components
          after they successfully mounted. In this example we are giving focus
        to the input inside componentDidMount method (hook). */}
        <input
          ref={(inp) => { this.inputElement = inp }}
          value={this.props.stateProp}
          onChange={this.props.change} />
      </div>
    )
  }
}

// propTypes evaluates props sent from the parent component, if a wrong type is
// supplied or pname prop is undefined a warning is shown in JS console (dev only)
// https://reactjs.org/docs/typechecking-with-proptypes.html
Comp1.propTypes = {
  pname: PropTypes.string.isRequired,
  stateProp: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}
