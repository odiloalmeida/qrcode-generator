import './App.css'

function App() {

  function GeraQRCode(){
    const conteudo = document.getElementById('conteudoQRCode').value;
    const GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
    const imagemQRCode = GoogleCharts + conteudo;
    document.getElementById('imageQRCode').src = imagemQRCode;
  }

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
      </div>
    </div>
  )
}

export default App
