import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.logger = this.logger.bind(this)
  }

  logger() {
    this.setState(prevState => {
      console.log(this.state.loggedIn)
      return {
        loggedIn: !prevState.loggedIn
      }

    })
  }

  /*
  Challenge:

  Given a stateless functional component:
  1. Follow the steps necessary to add state to it,
  2. Have state keep track of whether the user is logged in or not
  3. Add a button that logs the user in/out
      a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
  4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
  */

  render() {
    console.log(this.state.loggedIn)
    var buttonText = this.state.loggedIn ? "LogOut" : "LogIn"
    var boardText = this.state.loggedIn ? "Logged In" : "Logged Out"
    return (
      <div>
        <button onClick={this.logger}>{buttonText}</button>
        <h1>{boardText}</h1>
      </div>
    )
  }
}
export default App
