import React, { PureComponent } from 'react'


function enhanceReginProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="china" />
  }
}

class Home extends PureComponent {
  render() {
    return <h2>Home:：{`昵称：${this.props.nickname} 等级：${this.props.level} 区域${this.props.region}`}</h2>
  }
}

const EnhanceHome = enhanceReginProps(Home)

class About extends PureComponent {
  render() {
    return <h2>About:：{`昵称：${this.props.nickname} 等级：${this.props.level} 区域${this.props.region}`}</h2>
  }
}

const EnhanceAbout = enhanceReginProps(About)

class App extends PureComponent {
  render() {
    return (
      <div>
        高阶组件：{this.props.name}
        <EnhanceHome nickname="lisi" level={90}/>
        <EnhanceAbout nickname="wangwu" level={99}/>
      </div>
    )
  }
}

export default App