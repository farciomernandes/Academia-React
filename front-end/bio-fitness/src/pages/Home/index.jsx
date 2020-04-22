import React from 'react';
import Heade from '../../component/Header';
import dieta from '../../assets/dieta.png';
import musculacao from '../../assets/musculacao.png';
import karate from '../../assets/karate.png';
import esteira from '../../assets/esteira.png';
import './styles.css'

export default function HomeWeb(){
    return (
        <div>
            <div className="fundo">
            <Heade />
            <section className="section-container">
                <div>

                <h1>
                SHAPE YOUR BODY
                </h1>
                <p>
                <span className="name-blue">START</span> A BUILD YOUR FUTURE 
                <span className="name-blue"> WITH US</span>
                </p>
                <button className="btn-top">Go to App</button>


                </div>
               
            </section>
        </div>
        <section className="text">
            <div><h2 className="name-blue">WHAT'S SPECIAL?</h2></div>
            <div>                <p>THE EVOLUTION OF OUR CUSTOMERS COMES FIRST</p></div>
                </section>
            <div className="esports">
                <section className="services">
                <div> 
                <img src={karate} alt="Karate" /> 
                <h2>Martial Arts</h2>
                <p>Train Judo Free with sensei <br/>Matheus Luna</p>
                </div>
                <div>  
                <img src={musculacao} alt="Musculacao"/>
                <h2>Professional <br/>Training</h2>
                <p>Be guied by trained and prepared <br/>professionals
                to serve you. </p>
                </div>
                <div>
                    <img src={esteira} alt="Funcional"/>
                    <h2>Functional</h2>
                    <p>We offer several functional activities <br/>
                    such as dance, swimming, karate and <br/> more.</p>
                </div>
                <div>
                    <img src={dieta} alt="Nutricionista"/>
                    <h2>Plans Nutrition <br/>Quarterly</h2>
                    <p>Our customers receive assistance from <br/>
                     nutricionists to optimize development in the gym.</p>
                </div>
                </section>
            </div>
            <div className="register">
            <h1>DOWNLOAD OUR APP AND CONTACT US NOW FOR MORE OFFERS</h1>
            <h2>WHERE HEALTH AND BEAUTY FITNESS ARE.</h2>

            <button>Go to Dowload</button>
            </div>
        </div>
    );
}