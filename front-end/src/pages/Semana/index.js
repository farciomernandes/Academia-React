import React, { useState } from 'react';
import Head from '../../component/Header';
import Foooter from '../../component/Footer';

import './styles.css';

export default function Semana(){
   const [user, setUser] = useState('Username');
   const [segunda, setSegunda] = useState('Peito e Triceps');
   const [terca, setTerca] = useState('Perna e Panturrilha');
   const [quarta, setQuarta] = useState('Costa e Biceps');
   const [quinta, setQuinta] = useState('Aeróbico');
   const [sexta, setSexta] = useState('Peito e Biceps');
   const [sabado, setSabado] = useState('Funcional')
   
    return (
        <div className="container">
            <Head />
            <div className="headi">
                <h1>{user}</h1>
                    <div>
                        _____________________________________________________________________________________________________________________________________
                    </div>
            </div>
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
                    <td>{segunda}</td>
                    <td>{terca}</td>
                    <td>{quarta}</td>
                    <td> {quinta} </td>
                    <td> {sexta} </td>
                    <td> {sabado} </td>
                </tr>
            </table>

            <Foooter />
        </div>
    );
}