import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.shrinkerClick = this.shrinkerClick.bind(this)
  }

  handleClick() {
    console.log("clicked")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleClick2() {
    console.log("Clicked2")
    this.setState(prevState => {
      return {
        count: prevState.count * 2
      }
    })
  }

  shrinkerClick() {
    this.setState(prevState => {
      return {
        count: prevState.count / 2
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <button onClick={this.handleClick2}>BigChange</button>
        <button onClick={this.shrinkerClick}>shrink</button>
      </div>
    )
  }
}

export default App
