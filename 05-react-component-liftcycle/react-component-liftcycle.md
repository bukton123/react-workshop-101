# React component liftcycle

## Liftcycle flow
![Liftcycle](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/05-react-component-liftcycle/lift.PNG)

image @https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0

## React Component
>
> React Component [Document](https://reactjs.org/docs/react-component.html)
> 
# old
* constructor
* componentWillMount
* render
* componentDidMount
* componentWillReceiveProps
* shouldComponentUpdate 
* componentWillUpdate
* componentDidUpdate
* componentWillUnmount


# current
* constructor
* static getDerivedStateFromProps
* render
* componentDidMount
* UNSAFE_componentWillMount
* static getDerivedStateFromProps
* shouldComponentUpdate()
* getSnapshotBeforeUpdate()
* componentDidUpdate()
* UNSAFE_componentWillUpdate()
* UNSAFE_componentWillReceiveProps()
* componentWillUnmount
* componentDidCatch

## How to react component liftcycle
* create file RemoveComponent.js
```js
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
```
* create file Conter.js
```js
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
```

* create file TestComponent.js
```js
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
```

# Example
![example component step 1](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/05-react-component-liftcycle/step1.PNG "")

![example component step 2](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/05-react-component-liftcycle/step2.PNG "")

![example component step 3](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/05-react-component-liftcycle/step3.PNG "")

![example component step 4](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/05-react-component-liftcycle/step4.PNG "")