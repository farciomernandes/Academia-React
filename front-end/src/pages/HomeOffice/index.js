import React from 'react';
import Head from '../../component/HomeOffice';

import './styles.css';

export default function HomeOffice(){
    const office = localStorage.getItem('officeName')
    
    return(
        <div className="office-ccontainer">
            <Head name={office} />
            <div className="unica-div">
                <h2>SELECT IN HEADER FROM PAGE ONE OPTION!</h2>
            </div>
        </div>
    );
}