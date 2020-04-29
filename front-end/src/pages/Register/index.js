import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Head from '../../component/Header';

import './styles.css'

import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('name')
    const [city, setCity] = useState('city');
    const [sex, setSex] = useState('sex');
    const [plan, setPlan] = useState('plan');
    const [tell, setTell] = useState('tell');
    const [email, setEmail] = useState('email');
    
    const history = useHistory();

    async function userRegister(e){
        e.preventDefault();
        
        const data ={
            name,
            city,
            sex,
            plan,
            tell,
            email
        }
        console.log(data)
        try{
            const response = await api.post('client', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente!')
        }
    }

    return(
        <div>
            <Head name="User" />
            <div className="trainer-register">

            <section className="register-container">
            <h1>Register Client</h1>
            <form onSubmit={userRegister}>
            <input value={name} 
            onChange={e=> setName(e.target.value)} />
            <br />
            <input value={city} 
            onChange={e=> setCity(e.target.value)} />
            <br />
            <div className="raios">
            <section>
            <input type="radio" value="feminino"
             onClick={e=> setSex(e.target.value)}
             /><p>Feminino</p>

            </section>
            <section>
            <input type="radio" value="masculino"
            onClick={e=> setSex(e.target.value)}
            /> <p>Masculino</p>

            </section>
            </div>
            <br />
            <input value={plan}
            onChange={e=>setPlan(e.target.value)} />
            <br />
            <input value={tell}
            onChange={e=> setTell(e.target.value)} />
            <br />
            <input value={email}
            onChange={e=> setEmail(e.target.value)} />
            <br />
            <button type="submit">Cadastrar</button>
            </form>
        </section>
        </div>

    </div>
    );
}