import React, { PureComponent, createContext } from 'react'


// 创建context
const UserContext = createContext({
  nickname: "默认",
  level: -1,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <h2>Home: {`昵称：${value.nickname} 等级：${value.level} 区域：${value.region}`}</h2>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <h2>About: {`昵称：${value.nickname} 等级：${value.level} 区域：${value.region}`}</h2>
          }
        }
      </UserContext.Consumer>
    )
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        高阶组件：{this.props.name}
        <UserContext.Provider value={{nickname: "zhang", level: 18, region: "CH"}}>
          <Home/>
          <About/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App