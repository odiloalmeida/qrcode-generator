import { useState } from 'react'
import './App.css'

function App() {

  const [qrcode, setQrCode] = useState('httpschart.googleapis.comchartchs=500×500&cht=qr&chl=');



  return (
    <div className="App">
      <div className='container-wrap'>
        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        <img
        id='imageQRCode'
        src={qrcode}/>

        <form onSubmit={GeraQRCode}>
          <input
          id='conteudoQRCode'
          className='input'
          placeholder='Digite seu link...'/>

          <button type='submit'>Meteu essa</button>
        </form>
      </div>
    </div>
  )
}

export default App
