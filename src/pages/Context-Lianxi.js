import React, { Component } from 'react'
import { ThemeProvider } from '../Context'
import ChangeName from './changename'

class ContextLianxi extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '嘎子',
        bgColor: 'pink'
      },
      color: {
        bg: 'red'
      }
    }
  }

  render() {
    const { user } = this.state
    return (
      <ThemeProvider value={user}>
        <ChangeName />
      </ThemeProvider>
    )
  }
}

export default ContextLianxi
