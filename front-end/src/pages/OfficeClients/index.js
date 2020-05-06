import React,{useState, useEffect} from 'react';

import {useHistory} from 'react-router-dom';

import Head from '../../component/HomeOffice';  

import api from '../../services/api';


import './styles.css'


export default function OfficeClient(){
    const history = useHistory();

    const office = localStorage.getItem('officeName');
    const id = localStorage.getItem('officeId');

    const [clients, setClients] = useState([]);
    const [delet, setDelet] = useState('Client ID');
    const [officeLog, setOfficeLog] = useState('none');

        useEffect(()=>{
            api.get('/client')
            .then(response => {
                setClients(response.data)
            })
            }, [id])

        function logado(){
            if(office != 'user'){
                setOfficeLog('block');
            }else{
                alert('Please login to continue!')
                history.push('/login-office')
            }
           
        }
        
    function handleDelete(){
        api.delete(`client/${delet}`)

    }
    function officeDelete(){
        api.delete(`office/${id}`);
    }

    return(
        <div>
            <Head name={office} />
            <form className="deletar-client">
                <p>Delete client</p>
                <br />
                <input value={delet}
                onChange={e => setDelet(e.target.value)} />
                <button onClick={handleDelete}>Delete</button>
            </form>
        <div className="office-container">
            <header className="all-clients">
                <h1>Welcome {office}</h1>
                <div className="aloo">
                <h2>This is the employee space</h2>
                <h2>Here, you have a list the clients the academy</h2>
                <p>Press (ctrl + f) and type the name you are looking for</p>
                </div>
                </header>
        </div>
        <div className="all-resultados">
            <button onClick={logado}>Exibr Clientes</button>
            <div className="resultados" style={{display:officeLog}}>
                {clients.map(clients => (
                    <div className="clientees">
                        <br />  Name: {clients.name}
                        <br />  Id: {clients.id}
                        <br /> Email: {clients.email}                
                        <br />Telefone: {clients.tell}
                    </div>
                ))}
            </div>
          </div>

        </div>
    );
}