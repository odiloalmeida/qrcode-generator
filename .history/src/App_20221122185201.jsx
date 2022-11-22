import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='container-wrap'>
        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        <img src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl="/>
        <input
        className='input'
        placeholder='Digite seu link...'/>
      </div>
    </div>
  )
}

export default App
