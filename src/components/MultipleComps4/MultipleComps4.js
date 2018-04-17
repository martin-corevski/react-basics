import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import classes from './MultipleComps4.scss'
import Comp4 from '../Comp4/Comp4'

class multipleComps4 extends Component {
  render () {
    const list = this.props.components.map((comp, index) => {
      return (
        <CSSTransition
          key={index}
          classNames={{
            enter: '',
            enterActive: '',
            exit: classes.fadeExit,
            exitActive: classes.fadeExitActive
          }}
          timeout={300}
        >
          <Comp4
            key={comp.id}
            name={comp.name}
            click={this.props.clicked.bind(this, index)}
            change={event => this.props.changed(event, comp.id)}
          />
        </CSSTransition>
      )
    })
    return <TransitionGroup>{list}</TransitionGroup>
  }
}

export default multipleComps4
