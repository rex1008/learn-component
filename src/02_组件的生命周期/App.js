import React, { Component } from 'react'

class Cpn extends Component {
    render() {
        return <h2>我是Cpn组件</h2>
    }

    componentWillUnmount() {
        console.log("Cpn组件将要被移除")
    }
}

export default class App extends Component {

    constructor() {
        super();

        console.log("执行了constructor")

        this.state = {
            counter: 0,
            isShow: true
        }
    }

    render() {
        console.log("执行了组件的render")
        return (
            <div>
                我是App组件
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <hr />
                <button onClick={e => this.changeCpnShow()}>切换</button>
                {this.state.isShow && <Cpn />}
            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeCpnShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    componentDidMount() {
        console.log("执行了componentDidMount")
    }

    componentDidUpdate(prevProps,prevState, snapShot) {
        console.log("componentDidUpdate")
    }
}
