import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Head from '../../component/HomeOffice';

import api from '../../services/api'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';




export default function(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        
        try{
          console.log(id)
            const response = await api.post('sessionsOffice', {id});
            console.log(response.data.name)
            
            localStorage.setItem('officeId', id);
            localStorage.setItem('officeName', response.data.name);
            
            history.push('/office-clients')
        }catch(err){
            alert('Falha no login, tente novamente!')
        }
    
    }

    function contaNova(){
      alert(`Somente ADMINISTRADORES podem registrar um funcionário!`)
    }

    return(
        <div className="all">
          <Head name="user" />
        <h1>Log<span>in</span></h1>

          <div className="logon-container">

            <section className="form">         
                <form onSubmit={handleLogin}>
                
                <input placeholder="Your ID" value={id}
                onChange={e => setId(e.target.value)} />

                <button type="submit">Login</button>

                <a onClick={contaNova}>
                  <FiLogIn size={16} color="black" />  Sign in
                </a>
                </form>
            </section>
          </div>
        </div>

    );
}