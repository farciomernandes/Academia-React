import React from 'react';
import './styles.css';

export default function HeadeWeb(){
    return(
        <header>
              <a href="/"><h1>Bio<span> Fitness</span></h1></a>
            <nav>
                <a href="/">HOME</a>
                <a href="#">WITH US</a>
                <a href="/bmi-calculator"> BMI CALCULATOR</a>
                <a href="#"> SERVICES</a>
                <a href="/contact">CONTACT</a>
            </nav>
        </header>
    );
}