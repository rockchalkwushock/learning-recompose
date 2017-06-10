import React from 'react'
import { withProps } from 'recompose'

/**
 * @summary
 * withProps is an HOC for passing props to a child component.
 * This is a great HOC for using when needing to present mock
 * data to a child component, for instance a blog post that needs
 * to render the title, text, & author.
 */
const enhance = withProps({
  style: {
    fontSize: '1.5em',
    color: '#34aa11',
    backgroundColor: '#000'
  }
})

const Button = ({ clicked, style }) =>
  <button style={style} onClick={clicked} type="submit">Submit</button>

export default enhance(Button)
