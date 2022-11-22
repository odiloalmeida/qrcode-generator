import QRCode from 'react-qr-code'
import './App.css'


function App() {

  return (
    <div className="App">
      <div className='container-wrap'>
        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        <img
        id='imageQRCode'
        src=''/>
        <input
        id='conteudoQRCode'
        className='input'
        placeholder='Digite seu link...'/>
        <button type='submit'>Meteu essa</button>
      </div>
    </div>
  )
}

export default App
