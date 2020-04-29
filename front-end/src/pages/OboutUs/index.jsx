import React from 'react';
import Head from '../../component/Header';
import Foooter from '../../component/Footer';
import professional1 from '../../assets/professional1.png';
import professional2 from '../../assets/professional2.png';
import professional3 from '../../assets/professional3.png';
import professional4 from '../../assets/professional4.png';
import './styles.css'

export default function Obout () {


    const user = localStorage.getItem('sessionName');
    return (
        <div>
            <div className="header">
            <Head name={user}></Head> 
                <h2>OBOUT <span> US</span></h2>

                <hr />
            </div>


            <div className="Container">
                <div className="Item1"></div>

                <div className="Item2">
                    <h2>ABOUT US</h2>
                    <span>One of the academy´s main activides is:</span>   
                </div>     


                <div className="skills">
                    <li>
                        <h3>FISICO</h3><span class="bar"><span className="fisico"></span></span>
                    </li>

                    <li>
                        <h3>POSTURA</h3><span class="bar"><span className="postura"></span></span>
                    </li>

                    <li>
                        <h3>DEDICAÇÃO</h3><span class="bar"><span className="dedicaçao"></span></span>
                    </li>
                </div>
            </div>

            <div className="NomeFlutuante"><h1>Our Team</h1></div>
            <div className="team">
                <div>
                    <img className="ImagemTeam" src={professional1} alt=""/>
                    <h4>Sr.Kain</h4>
                    <span>Personal</span>
                    <p>Master of Bodybuild</p>
                </div>

                <div>
                    <img className="ImagemTeam" src={professional2} alt=""/>
                    <h4>Marcio</h4>
                    <span>Art Marcial</span>
                    <p>Master of Bodybuild</p>
                </div>

                <div>
                    <img className="ImagemTeam" src={professional3} alt=""/>
                    <h4>Arnold</h4>
                    <span>Personal</span>
                    <p>Master of Bodybuild</p>
                </div>

                <div>
                    <img className="ImagemTeam" src={professional4} alt=""/>
                    <h4>Major</h4>
                    <span>Personal</span>
                    <p>Master of Bodybuild</p>
                </div>

            </div>

            <div className="Customers">
                <h2>Customer <span> Testimonials</span></h2>
            </div>
        
        <Foooter />
        </div>
    );
}