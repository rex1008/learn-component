import React, { PureComponent } from 'react'


function withAuth(WrappedComponent) {
  return props => {
    const { isLogin } = props
    if(isLogin) {
      return <WrappedComponent {...props}/>
    } else {
      return <LoginPage/>
    }
  }
}

class LoginPage extends PureComponent {
  render() {
    return <h2>登陆页面</h2>
  }
}

// 购物车组件
class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>
  }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false}/>
      </div>
    )
  }
}
