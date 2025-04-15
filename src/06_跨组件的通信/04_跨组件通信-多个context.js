import React, { Component } from 'react'


// 创建Context对象
const UserContext = React.createContext({
  nickName: "rex",
  level: -1
})

const ThemeContext = React.createContext({
  color: "black"
})


// 函数式组件中使用Context对象
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h2 style={{color: theme.color}}>用户昵称2：{value.nickName}</h2>
                      <h2>用户等级2：{value.level}</h2>
                      <h2>颜色：{theme.color}</h2>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}


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
       nickName: "rosy",
       level: 99
    }
  }
  

  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{color: 'red'}}>
            <Profile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
