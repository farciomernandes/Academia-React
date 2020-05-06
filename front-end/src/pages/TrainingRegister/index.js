import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Head from '../../component/HomeOffice';

import './styles.css'

import api from '../../services/api';

export default function Register(){
    const [monday, setMonday] = useState('monday')
    const [tuesday, setTuesday] = useState('tuesday');
    const [fourth, setFourth] = useState('fourth');
    const [fifth, setFifth] = useState('fifth');
    const [friday, setFriday] = useState('fruday');
    const [saturday, setSaturday] = useState('saturday');
    
    const history = useHistory();
    const officeName = localStorage.getItem('officeName');
    const [userId, setUserId] = useState('Insert id from client');

    async function userRegister(e){
        e.preventDefault();
        if(officeName != null && officeName != 'user' && officeName != 'User'){
            const data ={
                monday,
                tuesday,
                fourth,
                fifth,
                friday,
                saturday
            }
            console.log(data)
            try{
                await api.post(`training/${userId}`, data);
    
                alert(`Treino atuaizado com sucesso!`);
                history.push('/semana');
            }catch(err){
                alert('Erro no cadastro do treino, tente novamente!')
            }
        }else{
            alert(`Somente funcionários cadastrados podem registrar treinos!`)
        }
       
    }

    return(
        <div>
            <Head name={officeName}></Head> 
            <div className="trainer-register">

            <section className="register-container">
            <h1>Register Traning</h1>
            <form onSubmit={userRegister}>
             <input value={userId} 
            onChange={e => setUserId(e.target.value)} />
            <br />
            <br />
            <br />

            <input value={monday} 
            onChange={e=> setMonday(e.target.value)} />
            <br />
            <input value={tuesday} 
            onChange={e=> setTuesday(e.target.value)} />
            <br />
            <input value={fourth}
            onChange={e => setFourth(e.target.value)} />
            <br />
            <input value={fifth}
            onChange={e=>setFifth(e.target.value)} />
            <br />
            <input value={friday}
            onChange={e=> setFriday(e.target.value)} />
            <br />
            <input value={saturday}
            onChange={e=> setSaturday(e.target.value)} />
            <br />
            <button type="submit">Cadastrar</button>
            </form>
        </section>
        </div>

    </div>
    );
}