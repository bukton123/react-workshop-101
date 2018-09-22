# Class/function and Event

## How to class/function
* Step 1 Create File FormEvent.js
```js
import React from 'react'

class FormEvent extends React.Component {
  render () {
    return (
      <div>
        <h3>Form Event</h3>
        <form>

        </form>
      </div>
    )
  }
}

export default FormEvent
```
* Step 2 Default state and Create function HandleInput
```js
// #1 add default state in class
state = {
  firstname: "",
  lastname: "",
  age: ""
}

// #2 add function in class
HandleInput = (key, event) => {
  this.setState({ [key]: event.target.value })
}

Submit = (event) => {
  event.preventDefault();
  const text = `
  First Name: ${this.state.firstname}
  Last  Name: ${this.state.lastname}
  Age       : ${this.state.age}
  `
  alert(text)
}

// #3 create from html and add to function render
render () {
  ...
      <form>
        <p>First Name</p>
        <input type="text" />
        <p>Last Name</p>
        <input type="text" />
        <p>Age</p>
        <input type="text" />
        <br />
        <input type="submit" value="Submit" />
      </form>
  ...
}

// #4 inject function handle event
<form onSubmit={this.Submit} >

<input type="text" value={this.state.firstname} onChange={this.HandleInput.bind(this, "firstname")} />

<input type="text" value={this.state.lastname} onChange={this.HandleInput.bind(this, "lastname")} />

<input type="text" value={this.state.age} onChange={this.HandleInput.bind(this, "age")} />

// #5 result
```
* Step 3 result
```js
import React from 'react'

class FormEvent extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    age: ""
  }

  HandleInput = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  Submit = (event) => {
    event.preventDefault();
    const text = `
    First Name: ${this.state.firstname}
    Last  Name: ${this.state.lastname}
    Age       : ${this.state.age}
    `
    alert(text)
  }

  render () {
    return (
      <div>
        <h3>Form Event</h3>
        <form onSubmit={this.Submit} >
          <p>First Name</p>
          <input type="text" value={this.state.firstname} onChange={this.HandleInput.bind(this, "firstname")} />
          <p>Last Name</p>
          <input type="text" value={this.state.lastname} onChange={this.HandleInput.bind(this, "lastname")} />
          <p>Age</p>
          <input type="text" value={this.state.age} onChange={this.HandleInput.bind(this, "age")} />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default FormEvent
```

## Example
![class event](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/04-class-function-and-event/class.PNG "")