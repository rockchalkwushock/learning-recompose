import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import Button from './Button'

/**
 * @summary
 * withHandlers is a HOC for creating event handlers that are
 * sent to the ComposedComponent as immutable props.
 * The HOC accepts props as an argument & returns a function.
 * So as in the example we are creating this.props.onClick just
 * as we would in a class based component & we are incrementing
 * the 'state' value 'count' by one each time the event is fired.
 *
 * The fact the event handler is now immutable means that it will not
 * need to be recreated on every render. This means that when
 * shouldComponentUpdate() looks to see if <App /> needs to render itself
 * again, if we were not updating the view with the count React would not
 * preform a rerender because their is no need to reconstruct the event
 * handler passed down to <Button />.
 */

const enhance = compose(
  withState('count', 'inc', 0),
  withHandlers({
    onClick: props => e => {
      props.inc(props.count + 1)
    }
  })
)

const App = ({ count, onClick }) =>
  <div
    className="App"
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Button
      clicked={onClick}
      style={{ backgroundColor: 'lightsalmon', color: 'blue' }}
    />
    <h4>{count}</h4>
  </div>

export default enhance(App)
