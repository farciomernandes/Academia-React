import React from 'react';
import gps from '../../assets/gps.png';
import phone from '../../assets/phone.png';
import email from '../../assets/mail.png';
import whats from '../../assets/whatsapp.png';
import face from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import './styles.css';


export default function Foooter(){
    return (
        
        <div className="container">
            <section className="faixa">
            <div>
                <img src={gps} alt="Localization"/>
                <p>R.Paulo José de Macêdo, 17</p> <br/>
                <p>Bairro São Benedito</p>
            </div>
            <div>
                <img src={phone} alt="Contact"/>
                <p>83 8161-3615</p>
            </div>
            <div>
                <img src={email} alt="Email"/>
                <p>farciomernandes <br/>@gmail.com</p>
            </div>
            </section>
          <footer>

              <div className="end">    
              <a href="#"><h1 className="bio">Bio<span> Fitness</span></h1></a>       
              <p className="copy">Copyright ©2020 All rights reserved |
               This template is made with by Marcio Fernandes  </p>
              </div>
       
              <div className="redes">
              <div>
              <img src={insta} alt="Instagram"/>
                <p>@farciomernandes</p>
              </div>
              <div>
                  <img src={face} alt="Facebook"/>
                  <p>Marcio Fernandes</p>
                  </div>
               <div>
                  <img src={whats} alt="Whatsapp"/>
                  <p>83 8161-3615</p>
               </div>
            </div>
          </footer>

        </div>
    );
}