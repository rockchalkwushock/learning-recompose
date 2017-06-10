import React from 'react'
import { mapProps } from 'recompose'

/**
 * @summary
 * mapProps acts just as .map() does by transforming
 * the iterable.
 *
 * NOTE:
 * In the screenshot in the README.md you can see that:
 * enhance(Button) has color: 'blue' & no backgroundColor set.
 * After the enhancement has been made to the component:
 * Button has color: 'red' & backgroundColor: 'yellow'
 */

/**
 * mapProps excepts a function as its argument as do HOC's/HOF's.
 * In this function we pass props as the argument, but use ES6 to deconstruct the object.
 * We are specifically wanting to transform the style object of props; but it is necessary
 * to pass the rest of the props (...rest) or our Button loses the ability to be clicked &
 * yield a state update to count.
 */
const enhance = mapProps(({ style, ...rest }) => {
  return { ...rest, style: { color: 'red', backgroundColor: 'yellow' } }
})

const Button = ({ clicked, style }) =>
  <button style={style} onClick={clicked} type="submit">Submit</button>

export default enhance(Button)
