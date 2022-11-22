import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1>Gerador</h1>
       <h1>QR Code</h1>
       <input
       placeholder='Digite seu link...'/>
    </div>
  )
}

export default App
