import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        高阶组件：{this.props.name}
      </div>
    )
  }
}

function enhanceCompoment(WrappedComponent) {
  return class NewCompoment extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

function enhanceCompoment2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props}/>
  }

  return NewComponent
}

const EnhanceComponent = enhanceCompoment2(App)

export default EnhanceComponent