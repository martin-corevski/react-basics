import React from 'react'

// The function component doesn't extend React.Component which means it doesn't
// have state and since it's not a class it doesn't use this keyword.
const comp3 = (props) => {
  return (
    <div className='borders-all'>
      <h4>This is function component 3 with props.children:</h4>
      <h5>{props.children}</h5>
    </div>
  )
}

export default comp3
