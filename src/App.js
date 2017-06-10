import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  state = { count: 0 }
  _onClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="App"
      >
        <Button style={{ color: 'blue' }} clicked={this._onClick} />
        <h4>{this.state.count}</h4>
      </div>
    )
  }
}

export default App
