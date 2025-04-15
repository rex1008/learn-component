import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       friends: [
        {name: "zhansan", age: 30},
        {name: "lisi", age: 25},
        {name: "wangwu", age: 35}
       ]
    }
  }
  
  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.friends !== this.state.friends) {
      return true;
    }

    return false;
  }
  

  render() {
    return (
      <div>
        <h2>好友列表:</h2>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.name}>
                  姓名：{item.name} 
                  年龄：{item.age}
                  <button onClick={e => this.incrementAge(index)}>年龄+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }

  insertData() {
    console.log("开始添加数据")

    const newData = {name: "zhaoliu", age: 18};

    //this.state.friends.push(newData);
    const newFriends = [...this.state.friends];
    newFriends.push(newData);
    this.setState({
      friends: newFriends
    })
  }

  incrementAge(index) {
    console.log("增加年龄")

    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends: newFriends
    })

  }
}
