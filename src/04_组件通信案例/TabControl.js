import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentIndex: 0
    }
  }
  

  render() {
    const { titles } = this.props
    const { currentIndex } = this.state

    return (
      <div className='tab-control'>
        {
          titles.map((item, index) => {
            return (
              <div onClick={e => this.itemClick(index)}
                key={item} 
                className={'tab-item ' + (index === currentIndex ? 'active' : '')}>
                <span>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index
    })

    const { callBack } = this.props
    callBack(index);
  }
}
