import React, { Component } from 'react'
import { ThemeConsumer } from '../Context'

class ChangeName extends Component{
  constructor(props) {
    super(props)
    this.state = {
      age: 24
    }
  }

  render() {
    const { age } = this.state
    return (
      <div>
        <ThemeConsumer>
          {
            context => <p className={context.bgColor}>名称：{ context.name }</p>
          }
        </ThemeConsumer>
        
        <p>年龄：{ age }</p>
      </div>
    )
  }
}

export default ChangeName
