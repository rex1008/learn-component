import React, { Component } from 'react'


class ChildCpn extends Component {
    /* 如果是标准的constuctor结构，可以省略不写，因为类的默认构造函数就是这个格式 */
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
         
    //   }

    //   //this.props = props;
    // }
    

    render() {
      const {name, age, height} = this.props;
    
      return (
        <h2>子组件展示数据：{name + " " + age + " " + height}</h2>
      )
    }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="zhang" age="20" height="190" />
        <ChildCpn name="li" age="19" height="180" />
      </div>
    )
  }
}
