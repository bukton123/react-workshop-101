# React-component and Prop-types

## Container component or Stateful Component
* Stateful.js
```javascript
import React, { Component } from 'react'

class Stateful extends Component {
  render () {
    return (
      <div>
        <h3>Stateful</h3>
      </div>
    )
  }
}

export default Stateful
```


## Presentaional component or Stateless Component
* Stateless.js
```javascript
import React from 'react'

export default () => {
  return (
    <div>
      <h3>Stateless</h3>
      <Stateless1 />
      <Stateless2 />
    </div>
  )
}

const Stateless1 = () => {
  return <h3>Stateless 2</h3>
}

function Stateless2 () {
  return <h3>Stateless 3</h3>
}
```
# Default props
* DefaultProps.js
```javascript
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
```

# Prop-types
* install package prop-types
```bash
npm install --save prop-types
```
* How to props-type
* PropsType.js
```js
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
```

* error prop-types
![error](https://github.com/bukton123/react-workshop-101/blob/master/02-react-component/error.PNG "")


## Example
![component](https://github.com/bukton123/react-workshop-101/blob/master/02-react-component/component.PNG "")