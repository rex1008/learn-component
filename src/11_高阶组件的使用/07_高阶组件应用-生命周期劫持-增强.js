import React, { PureComponent } from 'react'


function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    componentWillMount = () => {
      this.beginTime = Date.now()
    }


    componentDidMount = () => {
      this.endtTime = Date.now()
  
      console.log(`${WrappedComponent.name}组件渲染时间：${this.endtTime - this.beginTime}`)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  
}

class Home extends PureComponent {


  render() {
    return <h2>Home</h2>
  }

  
}

class About extends PureComponent {
  render() {
    return <h2>About</h2>
  }
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome/>
        <TimeAbout/>
      </div>
    )
  }
}
