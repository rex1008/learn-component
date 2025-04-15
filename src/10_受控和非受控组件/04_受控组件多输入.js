import React, { PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
  
    this.state = {
       username: "",
       password: "",
       verify: ""
    }
  }
  

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名：<input type="text" 
                          id="username" 
                          name="username"
                          onChange={e => this.handleChange(e)}
                          value={this.state.username} />
          </label>
          <br />
          <label htmlFor="password">
            密码：<input type="text" 
                          id="password"
                          name="password"
                          onChange={e => this.handleChange(e)}
                          value={this.state.password} />
          </label>
          <br />
          <label htmlFor="verify">
            验证：<input type="text" 
                          id="verify"
                          name="verify"
                          onChange={e => this.handleChange(e)}
                          value={this.state.verify} />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)

  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUserNameChange(event) {
    //console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event) {
    //console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  handleVerifyChange(event) {
    //console.log(event.target.value)
    this.setState({
      verify: event.target.value
    })
  }
}
