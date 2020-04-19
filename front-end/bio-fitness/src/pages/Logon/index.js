import React from 'react';

import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.jpg' 

export default function(){
    return(
        <div className="all">
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Bio Fitness" width="100%" />

                <form>
                <input placeholder="Your Name" />
                <input placeholder="Your ID" />
                <button className="button" type="submit">Login</button>

                <a href="./register">
                  <FiLogIn size={16} color="black" />  Sign in
                </a>
                </form>
            </section>
        </div>
        </div>
    );
}