import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import api from '../../services/api'
import Head from '../../component/Header';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';




export default function(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', {id});
            console.log(response.data.name)
            
            localStorage.setItem('sessionId', id);
            localStorage.setItem('sessionName', response.data.name);
            history.push('/')
        }catch(err){
            alert('Falha no login, tente novamente!')
        }
    
    }

    return(
        <div>
              <Head name="user" />
        <div className="all">
        <h1>Log<span>in</span></h1>

          <div className="logon-container">

            <section className="form">         
                <form onSubmit={handleLogin}>
                
                <input placeholder="Your ID" value={id}
                onChange={e => setId(e.target.value)} />

                <button type="submit">Login</button>

                <Link to="/register">
                  <FiLogIn size={16} color="black" />  Sign in
                </Link>
                </form>
            </section>
          </div>
        </div>
        </div>  

    );
}