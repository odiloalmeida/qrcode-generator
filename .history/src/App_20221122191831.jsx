import QRCode from 'react-qr-code';
import { useState } from 'react';
import './App.css'


function App() {

  const [link, setLink] = useState('')

  return (
    <div className="App">
      <div className='container-wrap'>

        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        
        <QRCode
        value={link}/>


        <input
        id='conteudoQRCode'
        className='input'
        placeholder='Digite seu link...'/>
      </div>
    </div>
  )
}

export default App
