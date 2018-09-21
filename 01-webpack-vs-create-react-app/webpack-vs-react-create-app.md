# Webpack vs Create-react-app

## How to Create Webpack build Reactjs
* Step 1 create project name
```bash
# create folder project

mkdir webpack

cd webpack

# create package.json
npm init or yarn init

# condition create new package
package name: (webpack)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (MIT)

# npm confirm create
Is this ok? (yes) yes
```

* Step 2 install package
```bash
# install package dev

npm install --save webpack webpack-cli webpack-dev-server babel-core babel-loader@7 babel-preset-es2015 babel-preset-react babel-preset-stage-0 html-webpack-plugin  

# install pacage

npm install --save react react-dom
```

* Step 3 create file .babelrc
```bash
{
  "presets": [
    [
      "es2015",
      { "modules": false }
    ],
    "react",
    "stage-0"
  ],
  "plugins": []
}
```

* Step 4 create file webpack.config.js
```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: path.join('static', 'js/[name].[hash].js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
```

* Step 5 create file index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>React App</title>
</head>
<body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
</body>
</html>
```

* Step 6 create file index.js
```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render () {
    return (
      <div>
        <h1>React App</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
```

* Step 7 add script
```json
"scripts": {
    "start": "webpack-dev-server --open --port 3000 --mode development --hot --progress --colors",
    "build": "webpack --mode production"
},
```

* Step 8 start project & build project
```bash
npm start 

# Happy hacking!
# open project
- http://localhost:3000

# build project
npm run build 
```

## How to create react app
```bash
create-react-app "name project"

# to folder prject
cd "name project"

# start project
npm start or yarn start

# Happy hacking!
# open project
- http://localhost:3000
```

## Example
* Demo Webpack
```bash
cd webpack

npm install or yarn install

npm start

# open project
- http://localhost:4000
```

* Demo create-react-app
```bash
cd react-app

npm install or yarn install

npm start

# open project
- http://localhost:3000

```