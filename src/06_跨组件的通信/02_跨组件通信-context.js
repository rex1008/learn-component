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

ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
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
      //  nickName: "rosy",
      //  level: 99
    }
  }
  

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
        </UserContext.Provider>
          <Profile/>
      </div>
    )
  }
}
