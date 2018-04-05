import React, { Component } from 'react'
// import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

import Comp1 from '../components/Comp1/Comp1'
import Comp3 from '../components/Comp3/Comp3'
import MultipleComps4 from '../components/MultipleComps4/MultipleComps4'
import Counter from '../components/Counter/Counter'
// If you want to see error handling in action uncomment the next two lines
// import ErrorComp from '../ErrorComp/ErrorComp'
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

// with classes we have access to locally scoped classes from App.scss file
// import classes from './App.scss'

/**
 * This is an example of Stateful component (container)
 * @extends Component
 * @type {Object}
 */
class App extends Component {
// By extending React's PureComponent we get overridden shouldComponentUpdate()
// method out of the box and we don't need to check the state and props for
// changes
// class App extends PureComponent {
  constructor (props) {
    super(props)
    console.log('[App.js] constructor says hi!')
    // state can be initialized here as this.state = { ... }
  }

  state = {
    stateProp: 'React',
    showCounter: true,
    counter: 0,
    components: [
      {id: 'uid1', name: 'component 1'},
      {id: 'uid2', name: 'component 2'},
      {id: 'uid3', name: 'component 3'}
    ]
  }

  // ///////////////////////////////
  //  LIFECYCLE HOOKS (METHODS)  //
  // ///////////////////////////////

  // COMPONENT MOUNT

  componentWillMount () {
    console.log('[App.js] componentWillMount says hi!')
  }

  componentWillUnmount () {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('[App.js] componentWillUnmount says hi!')
  }

  componentDidMount () {
    console.log('[App.js] componentDidMount says hi!')
  }

  // COMPONENT UPDATE

  componentWillReceiveProps (nextProps) {
    console.log('[App.js] componentWillReceiveProps says hi!', nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate says hi!', nextProps, nextState)
    // Instead of checking every single state property and all props we can make
    // this component pure by extending React's PureComponent
    return nextProps !== this.props ||
    nextState.stateProp !== this.state.stateProp ||
    nextState.showCounter !== this.state.showCounter ||
    nextState.counter !== this.state.counter ||
    nextState.components !== this.state.components
  }

  componentWillUpdate () {
    console.log('[App.js] componentWillUpdate says hi!')
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate says hi!')
  }

  // ////////////
  //  HANDLERS //
  // ////////////

  changeStatePropHandler = event => {
    this.setState({stateProp: event.target.value})
  }

  /**
   * This function is just an example of how to increment state property.
   */
  incCounterHandler = x => {
    // This is not the right way to update state counter property
    // this.setState({
    //   counter: this.state.counter + x
    // })
    // Use this approach instead, state update is async which means some other
    // setState may update the counter in the meantime
    this.setState(
      (prevState, props) => {
        return { counter: prevState.counter + x }
      }
    )
  }

  toggleCounterHandler = () => {
    // IMMUTABILITY is important! Copy the state property first, then change its
    // value and update the state
    const showCounter = this.state.showCounter
    this.setState({showCounter: !showCounter})
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
    console.log('[App.js] render says hi!')

    let components = (
      <div>
        <MultipleComps4 components={this.state.components}
          clicked={this.removeCompHandler}
          changed={this.changeCompNameHandler} />
      </div>
    )

    // props and state are being watched by react and after every change, react
    // rerenders the component (part of the component)
    const propsName = 'Props'
    return (
      <div>
        <h1>Hello, {this.state.stateProp}!</h1>
        <Comp1 change={event => this.changeStatePropHandler(event)} pname={propsName}
          stateProp={this.state.stateProp}>
          Comp is passing this text to Comp1 and its available as this.props.children
        </Comp1>
        <Comp3>
          {/* The keyword this is only available in classes, therefore in Comp3
          children will be accessed by using props.children */}
          Comp is passing this text to Comp3 and its available as props.children
        </Comp3>
        <Counter
          showCounter={this.state.showCounter}
          counter={this.state.counter}
          toggleCounter={this.toggleCounterHandler}
          incCounter={this.incCounterHandler.bind(this, 5)} />
        {/* Show multiple components of type Comp4, generated with the map function */}
        {components}
        {/* If you want to see error handling in action uncomment this part
        <h1>Displaying components that might throw an error:</h1>
        <ErrorBoundary>
          <ErrorComp />
        </ErrorBoundary>
        */}
        {/* With activeClassName we can keep the navigation updated. */}
        <NavLink to='/comp2' activeClassName='a-class' >go to Comp2 component</NavLink>
      </div>
    )
  }
}

export default App
