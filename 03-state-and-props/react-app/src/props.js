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