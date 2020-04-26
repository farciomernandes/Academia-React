import React, { useState } from 'react';
import Heade from '../../component/Header'
import Foooter from '../../component/Footer';
import gps from '../../assets/gps.png';
import phone from '../../assets/phone.png';
import email from '../../assets/mail.png';
import './styles.css';

export default function Contact(){
    const [name, setName] = useState('Name');
    const [mail, setMail] = useState('Email');
    const [Ebody, setBody] = useState('Comment');
    const [contato, setContato] = useState('Tell');
    
    
    return (
    <div>
        <div className="heade">
        <Heade />
        <h2 className="contact">CONTACT <span> US</span></h2>
        <hr/>
        </div>
        <section>
            <hr/>
        </section>
        <div className="contat">
            <section className="imagens">
                <div>
                    <img src={gps} alt="Localization" /> 
                    <p>R.Paulo José de Macêdo, 17<br /> Bairro São Benedito</p>
                </div>
                <div>
                    <img src={phone} alt="Tell" />
                    <p>83 8161-3615</p>
                </div>
                <div>
                    <img src={email} alt="Email" />
                    <p>farciomernandes@gmail.com</p>
                </div>
            </section>
            <section className="form">
                <form action="http://formspree.io/farciomernandes@gmail.com"
                method="POST">
                <input name="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input name="Email"
                value={mail}
                onChange={e => setMail(e.target.value)}
                />
                <input name="Contato"
                value={contato}
                onChange={e => setContato(e.target.value)}
                />

                <textarea name="Mensagem"
                value={Ebody}
                onChange={e => setBody(e.target.value)}
                />
                <button type="submit" value="send">Submit</button>
                </form>
            </section>
            
        </div>

        <section className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5316114896286!2d-38.95744791253744!3d-6.9495073778513055!2
        m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a3ea3c2e69756f%3A0xfd7fb209032b389f!2sR.%20Cel.%20Rodrigues%2C%20Aurora%20
        -%20CE%2C%2063360-000!5e0!3m2!1spt-BR!2sbr!4v1587653648560!5m2!1spt-BR!2sbr" width="700" height="450" frameborder="0"
         allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </section>
        <section>
        <Foooter />

        </section>
        </div>
    );
}