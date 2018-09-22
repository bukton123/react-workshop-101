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