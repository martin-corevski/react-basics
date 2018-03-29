import React from 'react'

const errorComp = () => {
  const rnd = Math.random()

  if (rnd > 0.5) {
    throw new Error('Ups!')
  }

  return (
    <h3>Everything is Ok, no Ups so far!</h3>
  )
}

export default errorComp
