import React from 'react'
// Import css in order to have access to locally scoped classes
import classes from './Comp4.scss'
import HigherOrderComp from '../../hoc/HigherOrderComp'

/**
 * This is an example of Stateless (functional) component. Since this is
 * functional component, not a class, this keyword is not available
 * @param  {object} props Contains whatever the parent component sends as prop
 * @return {jsx} Returns "html"
 */
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
