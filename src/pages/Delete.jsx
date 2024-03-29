import {Link} from 'react-router-dom'
import GetUser from '../Components/GetUsers'

export default function Delete(){
    return(
        <div className='App'>
            <h1>Delete um Usuario</h1>
            <Link className='link' to="/">Home</Link>
            <main className='formbox'>
                <form action="https://crudmongo-2kgo.onrender.com/delete" method='post' className="form">
                    <input type="name" name="id" placeholder='ID User' />
                    <button type='submit'>Deletar</button>
                </form>

            </main>
            <main className='user'>
                <GetUser />
            </main>
        </div>
    )
}
