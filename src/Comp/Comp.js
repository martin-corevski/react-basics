import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// with classes we have access to locally scoped classes from Comp.scss file
import classes from './Comp.scss'
import Comp1 from '../Comp1/Comp1'
import Comp3 from '../Comp3/Comp3'
import Comp4 from '../Comp4/Comp4'

export default class Comp extends Component {
  state = {
    stateProp: 'state',
    showCounter: true,
    counter: 0,
    components: [
      {id: 'uid1', name: 'component 1'},
      {id: 'uid2', name: 'component 2'},
      {id: 'uid3', name: 'component 3'}
    ]
  }

  changeProp = stateProp => {
    this.setState({stateProp}) // this is the same as {stateProp: stateProp}
  }

  /**
   * This function is just an example of how to increment state property.
   */
  incCounterHandler = x => {
    this.setState({
      counter: this.state.counter + x
    })
  }

  toggleCounterHandler = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }

  removeCompHandler = index => {
    // This way we are creating a reference to this.state.components
    // const components = this.state.components

    // IMMUTABILITY is important!
    // With the slice() function components becomes a copy of
    // this.state.components instead of a reference.
    // const components = this.state.components.slice()

    // (ES6) Same as slice the spread operator will return an array of components
    const components = [...this.state.components]

    components.splice(index, 1)
    this.setState({components})
  }

  changeCompNameHandler = (event, id) => {
    const compIndex = this.state.components.findIndex(comp => {
      return comp.id === id
    })

    // Creating a copy of the component we want to change
    // const component = Object.assign({}, this.state.components[compIndex])

    // (ES6) Same as Object.assign but with spread operator
    const component = {...this.state.components[compIndex]}
    component.name = event.target.value

    // Next copy the state components
    const components = [...this.state.components]
    // And update the component
    components[compIndex] = component

    this.setState({components})
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

    let counter = null
    const btnCounterStyle = {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer'
    }

    if (this.state.showCounter) {
      // Example of how to manage (add) multiple classes to one element
      let counterClasses = []
      if (this.state.counter <= 10) {
        counterClasses.push(classes.textError)
      }
      if (this.state.counter >= 0 && this.state.counter <= 5) {
        counterClasses.push(classes.textBold)
      }

      counter = (
        <div>
          <p className={counterClasses.join(' ')}>Increase the counter: {this.state.counter}</p>
          {/* Increase the counter by 5 on every click, in order to pass the
            argument we have to use bind(this, argument, ...) this context is
            always passed as first argument to the bind method */}
          <button onClick={this.incCounterHandler.bind(this, 5)}>+</button>
        </div>
      )

      btnCounterStyle.backgroundColor = 'red'
    }

    let components = (
      <div>
        {this.state.components.map((comp, index) => {
          return <Comp4
            key={comp.id}
            name={comp.name}
            click={this.removeCompHandler.bind(this, index)}
            change={(event) => this.changeCompNameHandler(event, comp.id)} />
        })}
      </div>
    )

    // props and state are being watched by react and after every change, react
    // rerenders the component (part of the component)
    const propsName = 'Props'
    return (
      <div>
        <h1>Hello, {this.state.stateProp}!</h1>
        <Comp1 changeProp={this.changeProp} pname={propsName}
          stateProp={this.state.stateProp}>
          Comp is passing this text to Comp1 and its available as this.props.children
        </Comp1>
        <Comp3>
          {/* The keyword this is only available in classes, therefore in Comp3
          children will be accessed by using props.children */}
          Comp is passing this text to Comp3 and its available as props.children
        </Comp3>
        <button onClick={this.toggleCounterHandler} style={btnCounterStyle}>
          {this.state.showCounter ? 'Hide' : 'Show'} counter
        </button>
        {counter}
        {/* Show multiple components of type Comp4, generated with the map function */}
        {components}
        {/* With activeClassName we can keep the navigation updated. */}
        <NavLink to='/comp2' activeClassName='a-class' >go to Comp2 component</NavLink>
      </div>
    )
  }
}
