import React from 'react';
import './styles.css';

export default function HeadeWeb(){
    return(
        <header>
              <a href="#"><h1>Bio<span> Fitness</span></h1></a>
            <nav>
                <a href="#">HOME</a>
                <a href="#">SOBRE NÓS</a>
                <a href="#"> AULAS</a>
                <a href="#"> SERVIÇOS</a>
                <a href="#">CONTATO</a>
            </nav>
        </header>
    );
}