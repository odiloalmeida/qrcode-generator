import QRCode from 'react-qr-code';
import { useState } from 'react';
import QRCodeLink from 'qrcode' 
import './App.css'


function App() {

  const [link, setLink] = useState('')
  const [qrcode, setQrCode] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 500,
      margin: 5,
    }, function (error, url){
      setQrCode(url);
    }
  )}

  function handleQrCode(e){ 
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="App">
      <div className='container-wrap'>

        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        
        <QRCode
        value={link}
        size={350}
        />


        <input
        className='input'
        placeholder='Digite seu link...'
        value={link}
        onChange={ (e) => handleQrCode(e) }
        />

        <a href={qrcode} download={'qrcode.png'}> Baixar QrCode</a>

      </div>
    </div>
  )
}

export default App
