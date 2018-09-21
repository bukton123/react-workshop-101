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