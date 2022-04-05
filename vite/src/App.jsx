import {Link} from 'react-router-dom'
import './App.css'
import GetUsers from './components/GetUsers'

function App() {

  return (
    <div className="App">
      <h1>Crud Mongo</h1>
      <div className="links">
        <Link className='link' to="/register">Cadastro</Link>
        <Link className='link' to="/update">Atualizar</Link>
        <Link className='link' to="/delete">Deletar</Link>
      </div>
      <main className="users">
        <GetUsers />
      </main>
    </div>
  )
}

export default App
