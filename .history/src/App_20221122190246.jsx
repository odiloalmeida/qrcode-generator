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
        src='https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='/>
        <form onSubmit={GeraQRCode}>
          <input
          id='conteudoQRCode'
          className='input'
          placeholder='Digite seu link...'/>

          <button type='submit'></button>
        </form>
      </div>
    </div>
  )
}

export default App