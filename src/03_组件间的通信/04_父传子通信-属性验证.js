import React, { Component } from 'react'

import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age, height } = props

  const { names } = props

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

class ChildCpn2 extends Component {

  // es6中的class fields写法。注意必须要用statis生命，否则就变成了对象属性，而不是类属性
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    names: PropTypes.array
  }

  static defaultProps = {
    name: "rui",
    age: 30,
    height: 1.86,
    names: ["rosy", "chang"]
  }

  render() {
    const {name, age, height, names} = this.props;

    return (
      <div>
        <h2>{name + age + height}</h2>
        <ul>
          {
            names.map((item, index) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// ChildCpn.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number,
//   height: PropTypes.number,
//   names: PropTypes.array
// }

// ChildCpn.defaultProps = {
//   name: "rui",
//   age: 30,
//   height: 1.86,
//   names: ["rosy", "chang"]
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="zhang" age={18} height={1.88} names={["a", "b", "c"]} />
        <ChildCpn name="li" age={19} height={1.90} names={["c", "b", "a"]} />
        <ChildCpn2 />
      </div>
    )
  }
}
