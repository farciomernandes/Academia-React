import React, {useState} from 'react';
import './styles.css';

export default function HeadeWeb(){
    const [name, setName] = useState('Name');
    const [id, setId] = useState('Id');
    
    function Logar(){
        if(name == 'Marcio' && id == 123){
            alert(`Bem vindo ${name}, seu Id é ${id}`)
        }
        else{
            alert(`Nome e Id não são correspondentes!`)
        }
    }

    function pessoal(){
        alert('Logue na sua conta e veja o seu calendário de treinos para essa semana!')
    }

    return(
        <header>
            <div className="divSolo">

            <section>
            <a href="/" className="BioFit"><h1>Bio<span> Fitness</span></h1></a>
            </section>
            <section>
                <form>
                    <input type="text" value={name}
                    onChange={e => setName(e.target.value)}
                    name="name"/>
                    <input type="text" value={id}
                    onChange={e => setId(e.target.value)}
                    name="id"/>
                    <button type="button" onClick={Logar}>Login</button>
                </form>
            </section>
           </div>

            <nav>
                <a href="/">HOME</a>
                <a href="/obout">OBOUT US</a>
                <a href="/bmi-calculator"> BMI CALCULATOR</a>
                <a href="/semana" onClick={pessoal}>CALENDARIO SEMANAL</a>
                <a href="/contact">CONTACT</a>
            </nav>
        </header>
    );
}