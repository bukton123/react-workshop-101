import React from 'react'

import RemoveComponent from './RemoveComponent'
import Counter from './Counter'

class TestComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      remove: false
    }
  }

  OpenConter = () => this.setState({ remove: true })

  CounterUpdate = () => this.setState({ count: this.state.count + 1 })

  componentDidMount () {
    alert ('Mount success')
  }

  render () {
    return (
      <div>
        {
          this.state.remove ? (
            <div>
            <p>counter : {this.state.count || 0}</p>
            <Counter count={this.state.count} />
            <button onClick={this.CounterUpdate} > counter +1 </button>
            </div>
          ) : (
            <RemoveComponent />
          )
        }

        <br />

        <button onClick={this.OpenConter} >opent counter</button>
      </div>
    )
  }
}

export default TestComponent