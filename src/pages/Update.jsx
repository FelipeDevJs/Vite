import {Link} from 'react-router-dom'
import GetUser from '../Components/GetUsers'

export default function Update(){
    return(
        <div className='App'>
            <h1>Atualize um Usuario</h1>
            <Link className='link' to="/">Home</Link>
            <main className='formbox'>
                <form action="https://crudmongo-2kgo.onrender.com/update/" method='post' className="form">
                    <input type="text" name="id" placeholder='Id do usuario' />
                    <input type="text" name='name' placeholder='Novo Nome' />
                    <input type="password" name='pwd' placeholder='Nova Senha' />
                    <button type='submit'>Atualizar</button>
                </form>
            </main>
            <main className='user'>
                <GetUser />
            </main>
        </div>
    )
}