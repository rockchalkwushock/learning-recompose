import React from 'react'
import { defaultProps } from 'recompose'
import Button from './Button'

/**
 * @summary
 * defaultProps is an HOC for providing the functional component
 * with a set of props to use upon initial render before any events
 * are carried out that drive new values for those props, or in the event
 * that data is not fetched that should be provided on props these defaults
 * will be used instead. No different than the class usage.
 */

const enhance = defaultProps({
  style: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column'
  },
  greeting: 'Hello World from Recompose!',
  count: 0
})

const App = props =>
  <div className="App" style={props.style}>
    <h2>{props.greeting}</h2>
    <Button style={{ backgroundColor: 'lightsalmon', color: 'blue' }} />
    <h4>{props.count}</h4>
  </div>

export default enhance(App)
