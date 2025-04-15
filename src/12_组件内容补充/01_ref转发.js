import React, { PureComponent, createRef, forwardRef } from 'react'


class Home extends PureComponent {
  render() {
    return <h2>Home</h2>
  }
  
}

// function Profile() {
//   return <h2>Profile</h2>
// }

const Profile = forwardRef(function(props, ref) {
  console.log(props.name)
  return <h2 ref={ref}>Profile</h2>
})


export default class App extends PureComponent {

  constructor(props) {
    super(props)
  
    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }
  

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello Ref</h2>
        <Home ref={this.homeRef}/>
        <Profile ref={this.profileRef}/>
        <button onClick={e => this.printRef()}>打印ref</button>
      </div>
    )
  }

  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.profileRef.current)
  }
}
