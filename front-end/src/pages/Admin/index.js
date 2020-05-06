import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';


export default function Admin(){
    const [name, setName] = useState(null);
    const [passowrd, setPassowrd] = useState(null);
    const history = useHistory();
    
    function logar(e){
        e.preventDefault();
        if(name == 'lordkinfe' ){
            if(passowrd == '40028922'){
                localStorage.setItem("admin", name );
                localStorage.setItem("passowrd", passowrd);
                history.push('/adminOffices');
            }else{
                alert("Senha incorreta!")
            }
        }else{
            alert('Nome incorreto!')
        }
    }
    
    return(
        <div className="backMUS">
            <div className="container-admin">
            <h1 className="title-adminn">Page the Administrator</h1>
                <div className="luaa">
                 <form onSubmit={logar}>
                    <input value={name}
                    onChange={ e => setName(e.target.value)} placeholder="Admin" />
                    <input value={passowrd}
                    onChange={ e => setPassowrd(e.target.value)} placeholder="Password" />
                    

                    <button type="submit" className="btn-admin">Login</button>
                 </form>
                </div>
            </div>
        </div>
    );
}