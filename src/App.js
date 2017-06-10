import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  state = { count: 0, wildCard: false }
  _onClick = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
    if (count >= 5) {
      this.setState({ wildCard: true })
    }
  }
  render() {
    const { count, wildCard } = this.state
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="App"
      >
        <Button
          clicked={this._onClick}
          wildCard={wildCard}
          style={{ color: 'blue' }}
        />
        <h4>{count}</h4>
      </div>
    )
  }
}

export default App
