import React, { Children } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';



export default function HeadeWeb(props){
   
    return(
        <header>
            <div className="divSolo">

            <section>
            <Link to="/" className="BioFit"><h1>Bio<span> Fitness</span></h1></Link>
            </section>
           </div>

            <nav>
                <Link to="/">HOME</Link>
                <Link to="/obout">OBOUT US</Link>
                <Link to="/bmi-calculator"> BMI CALCULATOR</Link>
                <Link to="/semana">CALENDARIO SEMANAL</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/login">LOGIN</Link> 
            </nav>
            <hr style={{height: 12}} style={{background: 'none'}}/>
            <p>Welcome<span>{props.name}</span></p>
        </header>
    );
}