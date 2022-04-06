import {Link} from 'react-router-dom'
import GetUser from '../Components/GetUsers'

export default function Update(){
    return(
        <div className='App'>
            <h1>Atualize um Usuario</h1>
            <Link className='link' to="/">Home</Link>
            <main className='formbox'>
                <form action="" className="form">
                    <input type="text" name='name' placeholder='Nome' />
                    <button type='submit'>Atualizar</button>
                </form>
            </main>
            <main className='user'>
                <GetUser />
            </main>
        </div>
    )
}