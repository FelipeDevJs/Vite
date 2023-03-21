import axios from 'axios'
import { useEffect, useState } from 'react'


export default function GetUser(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://crudmongo-2kgo.onrender.com/all', { mode: 'no-cors' })
            .then((res)=> res.json())
            .then(data => setUsers(data))
            // console.log(users)
    },[])
    const temuser = users.length
    if(temuser == 0){
        return(
            <div>
                <p>nenhum Usuario cadastrado</p>
            </div>
        )
    }else{
        return(
            <>
                {users.map(res=>{
                    return(
                        <div key={res._id} className="userbox">
                            <p>Id: {res._id}</p>
                            <h3>Nome: {res.name}</h3>
                            <p>Senha: {res.pwd}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}
