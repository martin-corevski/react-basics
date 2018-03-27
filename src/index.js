import React from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import './index.scss'
import Comp from './Comp/Comp.js'
import Comp2 from './Comp2/Comp2.js'

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Comp} />
      {/* <Route path='/comp2/:extendedUrl' component={Comp2} /> */}
      {/* In order to accept /comp2 url also, we can use /:optionalUrl? */}
      <Route path='/comp2/:extendedUrl?' component={Comp2} />
    </div>
  </HashRouter>,
  document.getElementById('root'))
