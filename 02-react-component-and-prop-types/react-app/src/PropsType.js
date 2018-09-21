import React from 'react'
import PropTypes from 'prop-types'

class PropsTypeComponent extends React.Component {
  render () {
    return (
      <div>
        <hr />
        <h3>{this.props.name}</h3>
        <h3>{this.props.age}</h3>
      </div>
    )
  }
}

PropsTypeComponent.defaultProps = {
  name: "React"
}

PropsTypeComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default PropsTypeComponent