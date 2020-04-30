import React,{useState, useEffect} from 'react';

import Head from '../../component/HomeOffice';  

import api from '../../services/api';


import './styles.css'


export default function OfficeClient(){
    const office = localStorage.getItem('officeName');
    const id = localStorage.getItem('officeId');

    const [clients, setClients] = useState([]);

    useEffect(()=>{
    api.get('/client')
    .then(response => {
        setClients(response.data)
    })
    }, [id])

    

    return(
        <div>
            <Head name={office} />
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
            <div className="resultados">
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