import React from 'react';
import './styles.css';

import Heade from '../../component/Header';
import Foooter from '../../component/Footer';
export default function BMI(){
    return(
        <div>
            <div className="head">
            <Heade />
            <h2>CALCULATE <span> BMI</span></h2>
            <hr />
            </div>
            <div className="meio">
                <section className="tabela">
                <span><h2>CHECK YOUR BODY</h2></span>
                <h1> AVERAGE BMI TABLE</h1>
                <table border="1">
                    <tr>
                        <th>BMI</th>
                        <th>ESTADO DO PESO</th>
                    </tr>
                    <tr>
                        <td>Abaixo de 18,5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18.5 - 24.9</td>
                        <td>Saudável</td>
                    </tr>
                    <tr>
                        <td>25.0 - 29.9</td>
                        <td>Excesso de peso</td>
                    </tr>
                    <tr>
                        <td>30.0 - e acima</td>
                        <td>Obeso</td>
                    </tr>
                </table>
                </section>
                <section>
               <span><h2>CHECK YOUR BODY</h2></span>
                <h1>BMI CALCULATOR</h1>
                <p>BMI is the acronym for Body Mass Index that serves to assess the individual's 
                    weight in relation to his height and thus indicate whether he is within the 
                    ideal weight, above or below the desired weight.</p>
                    
                    <form>
                    <input type="text" placeholder="Altura/cm"/>
                    <input type="text" placeholder="Peso/kg"/>
                    <input type="text" placeholder="Idade"/>
                    <input type="text" placeholder="Sexo"/>
                    <button className="btn-bmi" type="Submit">CALCULATE</button>
                    </form>
                </section>
            </div>
            <Foooter />
        </div>
    );
}