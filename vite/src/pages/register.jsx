import { Link } from 'react-router-dom'
import GetUsers from '../components/GetUsers'

export default function Register(){
    return(
        <div className='App'>

            <h1>register</h1>
            <Link className='link' to="/">Home</Link>
            <form action="http://gitmongo.herokuapp.com/register" method='post' className="form">
                <input type="text" name="name" placeholder='Nome' />
                <input type="password" name="pwd" placeholder='Senha' />
                <button type="submit">Cadastrar</button>
            </form>
            <main className='users'>
                <GetUsers />
            </main>
        </div>
    )
}