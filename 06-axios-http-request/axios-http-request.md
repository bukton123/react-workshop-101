# Axios http request


## How to axios
```bash
npm install --save axios
```
> Github Axios [Link](https://github.com/axios/axios)

* create component AxiosComponent.js
```js
import React from 'react'

class AxiosComponent extends React.Component {
  state = {
    username: '',
    data: {}
  }

  HandleInput = (key, event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  render () {
    return (
      <div>
        <h3>Get User Github</h3>
        <input type="text" value={this.state.username} onChange={this.HandleInput.bind(this, 'username')} placeholder="search..." />
        <button >search</button>
      </div>
    )
  }
}

export default AxiosComponent
```

* import package axios
```js
import axios from 'axios'
```

* create function request api for axios
```js
RequestApi = async () => {
  const { data } = await axios({
    url: `https://api.github.com/users/${this.state.username}`,
    method: 'get',
  })
  if (typeof data === 'object') {
    this.setState({
      data
    })
  } else {
    this.setState({ data: {} })
  }
}
```

* inject function request api to button
```html
<button onClick={this.RequestApi} >search</button>
```

* add html view user to function render
```html
<br />
<br />
<img src={this.state.data.avatar_url || 'https://via.placeholder.com/300x300'} alt="" style={{ width: 300, height: 300 }} />
<p>Username: {this.state.data.login || '-'}</p>
<p>Name: {this.state.data.name || '-'}</p>
<p>Status: {this.state.data.bio || '-'}</p>
<p>Repo count: {this.state.data.public_repos || 0}</p>
<p>Followers: {this.state.data.followers || 0}</p>
<p>Following: {this.state.data.following || 0}</p>
```

* component result
```js
import React from 'react'
import axios from 'axios'

class AxiosComponent extends React.Component {
  state = {
    username: '',
    data: {}
  }

  HandleInput = (key, event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  RequestApi = async () => {
    const { data } = await axios({
      url: `https://api.github.com/users/${this.state.username}`,
      method: 'get',
    })
    if (typeof data === 'object') {
      this.setState({
        data
      })
    } else {
      this.setState({ data: {} })
    }
  }

  render () {
    return (
      <div>
        <h3>Get User Github</h3>
        <input type="text" value={this.state.username} onChange={this.HandleInput.bind(this, 'username')} placeholder="search..." />
        <button onClick={this.RequestApi} >search</button>
        <br />
        <br />
        <img src={this.state.data.avatar_url || 'https://via.placeholder.com/300x300'} alt="" style={{ width: 300, height: 300 }} />
        <p>Username: {this.state.data.login || '-'}</p>
        <p>Name: {this.state.data.name || '-'}</p>
        <p>Status: {this.state.data.bio || '-'}</p>
        <p>Repo count: {this.state.data.public_repos || 0}</p>
        <p>Followers: {this.state.data.followers || 0}</p>
        <p>Following: {this.state.data.following || 0}</p>
      </div>
    )
  }
}

export default AxiosComponent
```
## Example
![example axios](https://raw.githubusercontent.com/bukton123/react-workshop-101/master/06-axios-http-request/view.PNG "")