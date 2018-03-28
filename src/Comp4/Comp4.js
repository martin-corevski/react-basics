import React from 'react'

// The function component doesn't extend React.Component which means it doesn't
// have state and since it's not a class it doesn't use this keyword.
const comp4 = (props) => {
  return (
    <div>
      <h5 onClick={props.click}>This is function component 4 with props.name: {props.name}</h5>
      <input value={props.name} onChange={props.change} />
    </div>
  )
}

export default comp4
