import React, { Component } from 'react'

function ChildCpn(props) {
  const { name, age, height } = props

  return (
    <div>
      <h2>{name + age + height}</h2>
    </div>
  )
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
