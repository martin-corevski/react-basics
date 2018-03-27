import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Comp2 extends Component {
  navigate = () => {
    console.log('Comp2 navigate() log history: ', this.props.history)
    /**
     * Push, with this function the browser back button will work and we can go
     * back to comp2 page.
     */
    this.props.history.push('/')
    /**
     * Replace will "disable" the browser back button function, we won't go back
     * to the previous page, in our case comp2.
     */
    // this.props.history.replace('/')
  }

  render () {
    const { match: { params } } = this.props
    const { location: { search } } = this.props
    const queryString = require('query-string')
    const { urlParam1, urlParam2 } = queryString.parse(search)
    console.log('Comp2 Component render() log params: ', params)
    console.log('Comp2 Component render() log url query params: ', search)
    return (
      <div>
        <h4>This is component 2 with url params </h4>
        <h5>*you can test it by adding "/test?urlParam1=1&urlParam2=2" to the url and see the result below</h5>
        <ul>
          <li>Extended url: {params.extendedUrl}</li>
          <li>Url query param1: {urlParam1}</li>
          <li>Url query param2: {urlParam2}</li>
        </ul>
        {/* This button triggers the navigate function with this context */}
        {/* <button onClick={this.navigate.bind(this)}>home</button> */}
        {/* By using an arrow function we don't need to bind this context */}
        <button onClick={this.navigate}>home</button>
      </div>
    )
  }
}
// The component have to be exported withRouter in order for the push and replace
// functions to work. https://stackoverflow.com/a/42716055
export default withRouter(Comp2)
