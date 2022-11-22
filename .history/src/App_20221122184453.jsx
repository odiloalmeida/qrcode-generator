import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container-wrap'>
        <h1>Gerador</h1>
        <h1>QR Code</h1>
        <input
        className='input'
        placeholder='Digite seu link...'/>
      </div>
    </div>
  )
}

export default App
