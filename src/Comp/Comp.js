import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Comp.scss'
import Comp1 from '../Comp1/Comp1.js'
import Comp3 from '../Comp3/Comp3.js'

export default class Comp extends Component {
  constructor () {
    super()
    /**
     * State is only for internal, component specific use, it's not injected into
     * other components.
     * @type {Object}
     */
    this.state = {
      stateProp: 'state',
      counter: 0
    }
    // bind this context to incCounter
    this.incCounter = this.incCounter.bind(this)
  }

  changeProp (stateProp) {
    this.setState({stateProp}) // this is the same as {stateProp: stateProp}
  }

  /**
   * This function is just an example of how to increment state property.
   */
  incCounter () {
    // this is bound from inside the constructor
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    console.log('Component render() log')
    /**
     * After 10 seconds change the state, only the part of the DOM that has some
     * changes is refreshed. The component is re-rendered.
     * @type {String}
     */
    // setTimeout(() => {
    //   this.setState({
    //     stateProp: 'changed state'
    //   })
    // }, 10000)

    /**
     * Props, unlike state, can be injected into other components.
     * @type {String}
     */
    const propsName = 'Props'
    return (
      <div>
        <h1>Hello, {this.state.stateProp}!</h1>
        {/* We have to bind this in order for the Comp1 component to work with
        this context and access the changeProp function. */}
        <Comp1 changeProp={this.changeProp.bind(this)} pname={propsName}
          stateProp={this.state.stateProp}>
          Comp is passing this text to Comp1 and its available as this.props.children
        </Comp1>
        {/* The keyword this is only available in classes, therefore in Comp2
          children will be accessed by using props.children */}
        <Comp3>
          Comp is passing this text to Comp3 and its available as props.children
        </Comp3>
        {/* With activeClassName we can keep the navigation updated. */}
        <NavLink to='/comp2' activeClassName='a-class' >go to Comp2 component</NavLink>
      </div>
    )
  }
}
