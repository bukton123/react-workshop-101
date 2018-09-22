import React from 'react'

class Counter extends React.Component {
  shouldComponentUpdate (nextProps) {
    if (nextProps.count % 2 === 0) {
      return true
    } 
    return false
  }
  render () {
    return (
      <div>
        <p>counter liftcycle : {this.props.count || 0}</p>
      </div>
    )
  }
}

export default Counter