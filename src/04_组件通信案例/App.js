import React, { Component } from 'react'

import TabControl from './TabControl'

export default class App extends Component {
  constructor(props) {
    super(props)

    // 固定不变的数据最好不要放在state里，而是像这样直接设置为对象的属性
    this.titles = ['新款', '精选', '流行'];
  
    this.state = {
       currentTitle: "新款"
    }
  }
  

  render() {
    const { currentTitle } = this.state

    return (
      <div>
        <TabControl callBack={index => this.callBack(index)} titles={this.titles} />
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  callBack(index) {
    console.log(index)
    this.setState({
      currentTitle: this.titles[index]
    })
  }
}
