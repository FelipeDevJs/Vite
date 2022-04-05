import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetUsers(){
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/all")
          .then(res => res.json())
          .then((result) => {
              setUsers(result);
              console.log(users)
            },)
      }, [])
    
    return(
        <div className='box'>
            {users.map(res=>{
                return(
                    <div className='userbox'>
                        <p>Id: {res._id}</p>
                        <h3>Nome: {res.name}</h3>
                        <p>Senha: {res.pwd}</p>
                    </div>
                )
            })}
        </div>
    )
}