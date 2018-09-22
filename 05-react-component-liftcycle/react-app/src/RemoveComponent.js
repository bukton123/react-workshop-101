import React from 'react'

class RemoveComponent extends React.Component {
  render () {
    return (
      <div>loading....</div>
    )
  }
  componentWillUnmount () {
    alert('Unmount component')
  }
}

export default RemoveComponent