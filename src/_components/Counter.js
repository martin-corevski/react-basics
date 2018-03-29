import React from 'react'
import classes from './Counter.scss'

const counter = (props) => {
  let counter = null
  const btnCounterStyle = {
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer'
  }

  if (props.showCounter) {
    // Example of how to manage (add) multiple classes to one element
    let counterClasses = []
    if (props.counter <= 10) {
      counterClasses.push(classes.textError)
    }
    if (props.counter >= 0 && props.counter <= 5) {
      counterClasses.push(classes.textBold)
    }

    counter = (
      <div>
        <button onClick={props.toggleCounter} style={btnCounterStyle}>
          {props.showCounter ? 'Hide' : 'Show'} counter
        </button>
        <p className={counterClasses.join(' ')}>Increase the counter: {props.counter}</p>
        {/* Increase the counter by 5 on every click, in order to pass the
          argument we have to use bind(this, argument, ...) this context is
          always passed as first argument to the bind method */}
        <button onClick={props.incCounter}>+</button>
      </div>
    )

    btnCounterStyle.backgroundColor = 'red'
  }

  return counter
}

export default counter
