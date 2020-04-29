import React from 'react';
import './styles.css'

export default function Register(){
    return(
        <div className="register-container">
            <h1>Register</h1>
            <section className="section-container">
            <form>
            <input placeholder="name" />
            <br />
            <input placeholder="city" />
            <br />
            <input placeholder="sex" />
            <br />
            <input placeholder="plan" />
            <br />
            <input placeholder="tell" />
            <br />
            <input placeholder="email" />
            <br />
            </form>
        </section>
    </div>
    );
}