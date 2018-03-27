import React from 'react'

const comp3 = (props) => {
  return (
    <div className='borders-all'>
      <h4>This is component 3 with props.children:</h4>
      <h5>{props.children}</h5>
    </div>
  )
}

export default comp3
