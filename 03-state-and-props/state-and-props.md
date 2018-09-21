# State and Props

## How to state
* state.js
```js
import React from 'react'

class State extends React.Component {
  state = {
    name: "",
    nickname: ""
  }

  HandleInputName = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  HandleInput = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  render () {
    return (
      <div>
        <h2>State</h2>
        <br />
        <p>name :</p>
        <input type="text" value={this.state.name} name="name" onChange={this.HandleInputName} />
        <p>value : {this.state.name}</p>
        <p>nick name :</p>
        <input type="text" value={this.state.nickname} onChange={this.HandleInput.bind(this, "nickname")} />
        <p>value : {this.state.nickname}</p>
        <hr />
      </div>
    )
  }
}

export default State
```


## How to props
* props.js
```js
import React from 'react'

class Props extends React.Component {
  state = {
    name: "",
  }

  HandleInputName = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    return (
      <div>
        <h2>Props</h2>
        <p>name :</p>
        <input type="text" value={this.state.name} name="name" onChange={this.HandleInputName} />
        <ShowName name={this.state.name} />
      </div>
    )
  }
}

const ShowName = (props) => {
  return <p>value : {props.name}</p>
}

export default Props
```

## Example
![component](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/03-state-and-props/state-props.PNG "")
