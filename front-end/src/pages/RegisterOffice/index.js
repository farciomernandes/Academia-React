import React, {useState} from 'react';

import Head from '../../component/HomeOffice';

import './styles.css'

import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('name')
    const [city, setCity] = useState('city');
    const [sex, setSex] = useState('sex');
    const [email, setEmail] = useState('email');
    const [salary, setSalary] = useState('salary');
    const [office, setOffice] = useState('office');
    const [contact, setContact] = useState('contact')
    

    async function userRegister(e){
        e.preventDefault();
        const data ={
            name,
            office,
            sex,
            salary,
            city,
            email,
            contact
        }
        try{
            const response = await api.post('office', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            //history.push('/Login-office');
        }catch(err){
            alert('Erro no cadastro, tente novamente!')
        }
    }

    return(
        <div>
            <Head name="user" />
            <div className="trainer-register">

            <section className="register-container">
            <h1>Register Office</h1>
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
            <input value={contact}
            onChange={e=> setContact(e.target.value)} />
            <br />
            <input value={email}
            onChange={e=> setEmail(e.target.value)} />
            <br />


            <input value={office}
            onChange={e=> setOffice(e.target.value)} />
            <br />

            <input value={salary}
            onChange={e=> setSalary(e.target.value)} />
            <br />
            
            <button type="submit">Cadastrar</button>
            </form>
        </section>
        </div>

    </div>
    );
}