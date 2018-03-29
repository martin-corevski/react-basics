import React from 'react'
import Comp4 from '../Comp4/Comp4'

const multipleComps4 = props => props.components.map((comp, index) => {
  return <Comp4
    key={comp.id}
    name={comp.name}
    click={props.clicked.bind(this, index)}
    change={(event) => props.changed(event, comp.id)} />
})

export default multipleComps4
