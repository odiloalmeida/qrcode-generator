import './App.css'

function App() {

  function GeraQRCode(){
  var conteudo = document.getElementById('conteudoQRCode').value;
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
  var imagemQRCode = GoogleCharts + conteudo;
  document.getElementById('imageQRCode').src = imagemQRCode;
  }

  return (
    <div className="App">
      <div className='container-wrap'>
        <h1>Gerador</h1>
        <h2>de</h2>
        <h1>QrCode</h1>
        <img src=''/>
        <input
        id='conteudoQRCode'
        className='input'
        placeholder='Digite seu link...'/>
      </div>
    </div>
  )
}

export default App
