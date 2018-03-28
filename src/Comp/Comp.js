import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Comp.scss'
import Comp1 from '../Comp1/Comp1.js'
import Comp3 from '../Comp3/Comp3.js'

export default class Comp extends Component {
  state = {
    stateProp: 'state',
    counter: 0
  }

  changeProp = stateProp => {
    this.setState({stateProp}) // this is the same as {stateProp: stateProp}
  }

  /**
   * This function is just an example of how to increment state property.
   */
  incCounter = x => {
    // this is bound from inside the constructor
    this.setState({
      counter: this.state.counter + x
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

    // props and state are being watched by react and after every change, react
    // rerenders the component (part of the component)
    const propsName = 'Props'
    return (
      <div>
        <h1>Hello, {this.state.stateProp}!</h1>
        <p>Increase the counter: {this.state.counter}</p>
        {/* Increase the counter by 5 on every click, in order to pass the
          argument we have to use bind(this, argument, ...) this context is
          always passed as first argument to the bind method */}
        <button onClick={this.incCounter.bind(this, 5)}>+</button>
        <Comp1 changeProp={this.changeProp} pname={propsName}
          stateProp={this.state.stateProp}>
          Comp is passing this text to Comp1 and its available as this.props.children
        </Comp1>
        <Comp3>
          {/* The keyword this is only available in classes, therefore in Comp3
          children will be accessed by using props.children */}
          Comp is passing this text to Comp3 and its available as props.children
        </Comp3>
        {/* With activeClassName we can keep the navigation updated. */}
        <NavLink to='/comp2' activeClassName='a-class' >go to Comp2 component</NavLink>
      </div>
    )
  }
}
