import React, { PureComponent, createContext } from 'react'

// 定义一个高阶组件
function withUser(WrappedComponent) {
  // return props => {
  //   return (
  //     <UserContext.Consumer>
  //       {
  //         value => {
  //           return <WrappedComponent {...props} {...value}/>
  //         }
  //       }
  //     </UserContext.Consumer>
  //   )
  // }

  return function(props) {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <WrappedComponent {...props} {...value}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 创建context
const UserContext = createContext({
  nickname: "默认",
  level: -1,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return <h2>Home: {`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>About: {`昵称：${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.nickname}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetail = withUser(Detail)

class App extends PureComponent {
  render() {
    return (
      <div>
        高阶组件：{this.props.name}
        <UserContext.Provider value={{nickname: "zhang", level: 18, region: "CH"}}>
          <UserHome/>
          <UserAbout/>
          <UserDetail/>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App