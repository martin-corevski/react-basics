import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comp1 extends Component {
  handleChange = e => {
    this.props.changeProp(e.target.value)
  }

  render () {
    console.log('Comp1 Component render() log props: ', this.props)
    return (
      <div>
        <p>{this.props.pname} to you for using props!</p>
        {/* Every time we change the input value the handleChange method will
          be triggered and consequently the state will be updated, i.e. stateProp
          will have new value */}
        <input value={this.props.stateProp} onChange={this.handleChange} />
        <h4>The this.props.children in Comp1 contains: {this.props.children}</h4>
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
  changeProp: PropTypes.func.isRequired
}
