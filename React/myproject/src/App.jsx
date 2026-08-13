import React from 'react'
import Card from './components/Card'

const App = (props) => {
  return (
    <div>
      <Card name="John Doe" branch="DS - A" />
      <br />
      <br />
      <Card name="Jane Smith" branch="AIML - B" />
      <br />
      <br />
      <Card name="Bob Johnson" branch="CSE - C" />
      <br />
      <br />
      <Card name="Alice Williams" branch="DS - B" />
      <br />
      <br />
      <Card name="Charlie Brown" branch="CSE - A" />

    </div>
  )
}

export default App
