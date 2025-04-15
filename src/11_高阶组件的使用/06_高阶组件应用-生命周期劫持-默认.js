import React, { PureComponent } from 'react'

class Home extends PureComponent {

  componentWillMount = () => {
    this.beginTime = Date.now()
  }
  

  render() {
    return <h2>Home</h2>
  }

  componentDidMount = () => {
    this.endtTime = Date.now()

    console.log(`Home组件渲染时间：${this.endtTime - this.beginTime}`)
  }
  
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <About/>
      </div>
    )
  }
}
