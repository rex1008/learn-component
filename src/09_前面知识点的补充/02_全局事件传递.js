import React, { PureComponent } from 'react'


import { EventEmitter } from 'events'

// 事件总线：event bus
const eventBus = new EventEmitter()


class Home extends PureComponent{

  componentDidMount = () => {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  componentWillUnmount = () => {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }
  
  // 根据eventBus.emit("sayHello", "Hello Home", 123) 调用时传了多少参数，这里就声明多少个形参接收
  handleSayHelloListener(message, num) {
    console.log(message, num)
  }
  

  render() {
    return (
      <div>
        Home
      </div>
    )
  }

}

class Profile extends PureComponent{

  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了profile</button>
      </div>
    )
  }

  emmitEvent() {
    eventBus.emit("sayHello", "Hello Home", 123)
  }
  
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
