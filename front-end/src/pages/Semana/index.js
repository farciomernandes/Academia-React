import React, { useState, useEffect } from 'react';
import Head from '../../component/Header';
import Foooter from '../../component/Footer';
import api from '../../services/api';
import './styles.css';



export default function Semana(){
   

   const [days, setDays] = useState([]);
   const user = localStorage.getItem('sessionName');
   const userId = localStorage.getItem('sessionId');
   useEffect(()=>{
    api.get(`training/${userId}`,{
        headers:{
            Authorization: userId
        }
    }).then(response =>{
        setDays(response.data)
    })
   }, [userId])

   function handleDelete(){
       api.delete(`training/${userId}`,{
           headers:{
               Authorization: userId
           }
       }).then(alert('Atualize a Página'))
   }

    return (
        <div className="container">
                        <Head name={user}></Head> 

            <div className="headi">
             _____________________________________________________________________________________________________________________________________
            </div>
            <div>

            </div>
               {days.map(days => (
                <table border="1">
                    <tr className="days">
                    <td className="days">Segunda</td>
                    <td className="days">Terça</td>
                    <td className="days">Quarta</td>
                    <td className="days">Quinta</td>
                    <td className="days">Sexta</td>
                    <td className="days">Sabádo</td>
                </tr>
                <tr>
                    <td>{days.monday}</td>
                    <td>{days.tuesday}</td>
                    <td>{days.fourth}</td>
                    <td> {days.fifth} </td>
                    <td> {days.friday} </td>
                    <td> {days.saturday} </td>
                </tr>
                </table>
                   ))}
                   <button onClick={handleDelete}>Deletar Treino</button>

            <Foooter />
        </div>
    );
}