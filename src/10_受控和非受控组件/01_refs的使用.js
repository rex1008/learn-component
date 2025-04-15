import React, { Component, createRef } from 'react'


class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log("执行了组件的render")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

}


export default class App extends Component {

  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.counterRef = createRef()

    this.titleEl = null
  }


  componentDidMount = () => {

  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Mode 1</h2>
        <h2 ref={arg => this.titleEl = arg}>Mode 2</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef} />
        <button onClick={e => this.clickCounter()}>计数器</button>
      </div>
    )
  }

  changeText() {
    console.log(this.titleRef.current.innerHTML)

    this.titleRef.current.innerHTML = "Hello java"
    console.log(this.titleRef.current.innerHTML)

    console.log(this.titleEl)
    this.titleEl.innerHTML = "Hello Mode2"
  }

  clickCounter() {
    console.log(this.counterRef.current)
    this.counterRef.current.increment();
  }
}
