import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1>Gerador</h1>
       <h2>QR Code</h2>
    </div>
  )
}

export default App