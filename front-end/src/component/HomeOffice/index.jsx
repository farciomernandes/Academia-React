import React, { Children } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function HeadeWeb(props){
    
function logoutt(){
    
    localStorage.setItem('officeId', null);
    localStorage.setItem('officeName', 'user');
}

   
    return(
        <header>
            <div className="divSolo">

            <section>
            <Link to="/office" className="BioFit"><h1>Bio<span> Fitness</span></h1></Link>
            <button className="topoo" onClick={logoutt}>Exit my acount</button>
            </section>
           </div>

            <nav>
                <Link to="/office">HOME</Link>
                <Link to="/login-office">LOGIN</Link>
                <Link to="/office-clients"> CLIENT CONTROLLERS</Link>
                <Link to="/training-register">UPDATE TRAINING THE CLIENT</Link>
            </nav>
            <hr style={{height: 12}} style={{background: 'none'}}/>
            <p>Welcome<span>{props.name}</span></p>
        </header>
    );
}