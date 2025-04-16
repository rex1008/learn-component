import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {

  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0,
       friends: [
        {name: "zhangsan", age: 18},
        {name: "lisi", age: 19},
        {name: "wangwu", age: 20}
       ]
    }
  }
  


  render() {
    return (
      <>
        <h2>当前技术：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        {
          this.state.friends.map((item, index) => {
            return (
              <Fragment key={item.name}>
                <div>{item.name}</div>
                <p>{item.age}</p>
                <hr />
              </Fragment>
            )
          })
        }
      </>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
