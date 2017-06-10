import React from 'react'
import { withPropsOnChange } from 'recompose'

/**
 * @summary
 * withPropsOnChange is an HOC that implements the React.Component
 * lifecycle componentWillReceiveProps by taking in 2 arguments:
 * 1. Array<String> | (props, nextProps) => Boolean
 * 2. props => Object
 * withPropsOnChange will look to see if the declared props exists.
 * If yes then we return whatever props/changes to props we want;
 * if no then we make no changes on props.
 */
const enhance = withPropsOnChange(
  ['wildCard'],
  props =>
    props.wildCard
      ? { ...props, style: { backgroundColor: 'yellow', color: 'purple' } }
      : props
)

const Button = ({ clicked, style }) =>
  <button style={style} onClick={clicked} type="submit">Submit</button>

export default enhance(Button)
