import React from 'react'
import ReactDOM from 'react-dom'
import TestApp from './test'

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: 0
    }
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>click</button>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))