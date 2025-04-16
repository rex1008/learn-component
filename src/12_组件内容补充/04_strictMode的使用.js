import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {

  UNSAFE_componentWillMount = () => {
    console.log("Home will mount")
  }
  

  render() {
    return (
      <div>
         Home
      </div>
    )
  }
}

class Profile extends PureComponent {

  UNSAFE_componentWillMount = () => {
    console.log("Profile will mount")
  }

  render() {
    return (
      <div>
         Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}
