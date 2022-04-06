import axios from 'axios'
import { useEffect, useState } from 'react'


export default function GetUser(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5555/all')
            .then((res)=> res.json())
            .then(data => setUsers(data))
            console.log(users)
    },[])

    return(
        <>
            {users.map(res=>{
                return(
                    <div className="userbox">
                        <p>Id: {res._id}</p>
                        <h3>Nome: {res.name}</h3>
                        <p>Senha: {res.pwd}</p>
                    </div>
                )
            })}
        </>
    )
}