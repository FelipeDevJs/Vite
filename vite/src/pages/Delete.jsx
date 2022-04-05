import { Link } from 'react-router-dom'
import GetUsers from '../components/GetUsers'

export default function Delete(){
    return(
        <div className='App'>

            <h1>Deletar um Cadastro</h1>
            <Link className='link' to="/">Home</Link>
            <form action="https://gitmongo.herokuapp.com/delete" method='post' className="form">
                <input type="text" name="name" placeholder='Nome' />
                <button type="submit">Deletar um Cadastro</button>
            </form>
            <main className='users'>
                <GetUsers />
            </main>
        </div>
    )
}