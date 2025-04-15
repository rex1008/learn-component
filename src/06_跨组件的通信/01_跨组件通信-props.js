import React, { Component } from 'react'


function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称：{props.nickName}</h2>
      <h2>用户等级：{props.level}</h2>
    </div>
  )
}
function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickName={props.nickName} level={props.level} /> */}
      <ProfileHeader {...props} />
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
    // const { nickName, level } = this.state
    return (
      <div>
        {/* <Profile nickName={nickName} level={level} /> */}
        <Profile {...this.state} />
      </div>
    )
  }
}
