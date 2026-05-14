import React from 'react'

const App = () => {

  async function getdata() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const converted = await data.json(data)
    console.log(converted)
  }
  return (
    <div>
      <div>
        
      </div>
      <button onClick={getdata}>Get Information</button>
    </div>
  )
}

export default App
