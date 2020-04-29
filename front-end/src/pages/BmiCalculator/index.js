import React,{ useState } from 'react';
import './styles.css';

import Heade from '../../component/Header';
import Foooter from '../../component/Footer';
function BMI(){
    const [cor, setCor] = useState('black');
    
    const [ativo, setAtivo] = useState('none')
    const [bmic, setBMIC] = useState(0);
    const [peso, setPeso] = useState(0); 
    const [altura, setAltura] = useState(0); 
    
    function calcular(){ 
        let resultado = peso / (Math.pow(altura,2 ))
            setBMIC(resultado)
            setAtivo('flex');
            if( resultado < 18.6 )
                setCor('green');
            else if( resultado < 25 )
                setCor('blue')
            else if( resultado < 30)
                setCor('yellow')
            else
                setCor('red')
            }
            const user = localStorage.getItem('sessionName');
    return(
        <div>
            <div className="head">
            <Heade name={user}></Heade> 
            <h2>CALCULATE <span> BMI</span></h2>
            <hr />
            </div>
            <div className="meio">
                <section className="tabela">
                <span><h2>CHECK YOUR BODY</h2></span>
                <h1> AVERAGE BMI TABLE</h1>
                    <h1 className="bmi" style={{display:ativo}}> Your BMI is {bmic}</h1>
                <table border="1" style={{color:cor}}>
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
                    <input
                     value={altura}
                     onChange={e => setAltura(e.target.value)}
                     name="altura"  
                     placeholder="Altura/cm"/>

                    <input name="peso" placeholder="Peso/kg"
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    />
                    
                    <input name="idade" placeholder="Idade"/>
                    
                    <input name="sexo" placeholder="Sexo"/>
                    
                    <button type="button" className="btn-bmi" onClick={calcular}>CALCULATE</button>
                    </form>
                </section>
            </div>
            <Foooter />
        </div>
    );
}

export default BMI;