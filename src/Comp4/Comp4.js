import React from 'react'
// Import css in order to have access to locally scoped classes
import classes from './Comp4.scss'
import HigherOrderComp from '../_hoc/HigherOrderComp'

// The function component doesn't extend React.Component which means it doesn't
// have state and since it's not a class it doesn't use this keyword.
const comp4 = (props) => {
  return (
    // Using Higher Order Component instead of empty <div> ... </div>
    // or we can use the React v16.2 feature but you might have some linter
    // and build issues with it
    // <>
    <HigherOrderComp>
      {/* We can access locally scoped css class like textWarning. Also
        media query is attached to this class and when screen width is less than
      1024px the background color and text color will change */}
      <p className={classes.textWarning} onClick={props.click}>
        This is function component 4 with props.name:
      </p>
      {/* Or we can access :global scoped class like text-success. I'm using
      kebab-case for global classes and camelCase for local */}
      <p className='text-success'>{props.name}</p>
      <input value={props.name} onChange={props.change} />
    </HigherOrderComp>
    // </>
  )
}

export default comp4
