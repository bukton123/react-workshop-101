import React from 'react'

class DefaultProps extends React.Component {
  static defaultProps = {
    name: "Hello Props"
  }
  render () {
    return (
      <div>
        <hr />
        <h3>{this.props.name}</h3>
        <Hello name="React" />
      </div>
    )
  }
}

const Hello = (props) => {
  return <h3>Hello: {props.name}</h3>
}

Hello.defaultProps = {
  name: 'Props'
}

export default DefaultProps