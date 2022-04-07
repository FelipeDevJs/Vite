
import './App.css'
import GetUser from './Components/GetUsers'
import {Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h1>Bem Vindo</h1>
      <main className='links'>
        <Link className='link' to="/register">Cadastro</Link>
        <Link className='link' to="/update">Atualizar um Cadastro</Link>
        <Link className='link' to="/delete">Deletar um Cadastro</Link>
      </main>
      <main className='user'>
        <GetUser />
      </main>
    </div>
  )
}

export default App
