import {Link} from 'react-router-dom'
import GetUser from '../Components/GetUsers'

export default function Register(){
    return(
        <div className="App">
            <h1>Cadastre um Usuario</h1>
            <Link className='link' to="/">Home</Link>
            <main className='formbox'>
                <form action="https://gitmongo.herokuapp.com/register" method='post' className="form">
                    <input type="text" name="name" placeholder='Nome' />
                    <input type="password" name='pwd' placeholder='Senha' />
                    <button>Cadastrar</button>
                </form> 
            </main>
            <main className="user">
                <GetUser />
            </main>
        </div>
    )
}