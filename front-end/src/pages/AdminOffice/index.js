import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import  { useHistory } from 'react-router-dom';

import './styles.css';

export default function AdminOffice(){
    const history = useHistory();

    const user = localStorage.getItem("admin");
    
    const [logado, setLogado] = useState('none');
    const [logadu, setLogadu] = useState('none');
    const [office, setOffice] = useState([]);
    const [id, setId] = useState();
    const [clients, setClients] = useState([]);
    const [cliID, setCliID] = useState();

    useEffect(()=>{
        api.get('/client')
        .then(response => {
            setClients(response.data)
        })
        }, [id])

        function deleteClient(){
            api.delete(`client/${cliID}`);
        }

    function verificar(){
        if(user == null){
            alert('Faça login para executar essa ação')
            history.push('/admin')
        }else{
            setLogado('block')
        }
    }

    function verificarCli(){
        if(user == null){
            alert('Faça login para executar essa ação')
            history.push('/admin')
        }else{
            setLogadu('block')
        }
    }

    function deletar(){
        api.delete(`/office/${id}`)
    }

    useEffect(()=>{
        api.get('/office')
        .then(response=> {
            setOffice(response.data);
        })
    }, [user])

    useEffect(()=>{
        api.get('/client')
        .then(response=> {
            setClients(response.data);
        })
    }, [user])

    function exit(){
        localStorage.removeItem("admin");
        history.push("admin")
    }

    function newOffice(){
        history.push("/register-office")
    }

    return(
        <div>
            <div className="title-admin">
                <h1 className="alou">List the Offices and Clients</h1>
                <button className="btn" onClick={verificar}>Display Offices</button>
                <button className="btn" onClick={verificarCli}>Display Clients</button>
                <button className="btn" onClick={exit}>Exit</button>
                <button className="btn" onClick={newOffice}>New Office</button>
                <form onSubmit={deletar} style={{display: logado}}>
                    <input placeholder="Office ID"
                    onChange={e => setId(e.target.value)} />
                    <button type="submit">Delete Office</button> 
                </form>
                <form style={{display: logadu}} onSubmit={deleteClient}>
                <input placeholder="Client ID"
                    onChange={e => setCliID(e.target.value)} />
                    <button type="submit">Delete Client</button> 
                </form>
            </div>
            <h1>Offices</h1>
            <div className="resultados" style={{display: logado}}>
                {office.map(office=> (
                <div className="listaa"> 
                    <br /> Name: {office.name}
                    <br />  Id: {office.id}
                    <br /> Salário: {office.salary}
                    <br /> Telefone: {office.contact}
                </div>
                ))}
            </div>
            <h1>Clients</h1>
            <div className="resultados" style={{display: logadu}}>
                {clients.map(client=> (
                <div className="listaaa"> 
                    <br /> Name: {client.name}
                    <br />  Id: {client.id}
                    <br /> Salário: {client.salary}
                    <br /> Telefone: {client.contact}
                </div>
                ))}
            </div>
        </div>
    );
}