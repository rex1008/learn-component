import React, { Component } from 'react'


// 创建Context对象
const UserContext = React.createContext({
  nickName: "rex",
  level: -1
})

class ProfileHeader extends Component {
  
  render() {
    console.log(this.context)
    return (
      <div>
        <h2>用户昵称：{this.context.nickName}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )
  }
}

// 函数式组件中使用Context对象
function ProfileHeader2() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称2：{value.nickName}</h2>
              <h2>用户等级2：{value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

// 管Context默认值的，如果从context中没有取到，则以contex对象中的默认值
ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ProfileHeader2 />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       nickName: "rosy",
       level: 99
    }
  }
  

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>
      </div>
    )
  }
}
