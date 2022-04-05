import { Link } from 'react-router-dom'
import GetUsers from '../components/GetUsers'

export default function Update(){
    return(
        <div className='App'>

            <h1>Atualizar um Cadastro</h1>
            <Link className='link' to="/">Home</Link>
            <form action="" className="form">
                <input type="number" name="id" placeholder='Id' />
                <input type="text" name="name" placeholder='Nome' />
                <input type="password" name="pwd" placeholder='Senha' />
                <button type="submit">Atualizar Cadastro</button>
            </form>
            <main className='users'>
                <GetUsers />
            </main>
        </div>
    )
}