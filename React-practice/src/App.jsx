import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
        <h1>Products: </h1>
      <div id='Products'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </div>
    </>
  )
}

export default App
