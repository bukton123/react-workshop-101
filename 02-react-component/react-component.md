# React-component

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

## Example
![component](https://github.com/bukton123/react-workshop-101/blob/master/02-react-component/component.PNG "")