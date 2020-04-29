import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import BMI from './pages/BmiCalculator';
import Obout from './pages/OboutUs';
import Semana from './pages/Semana';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/bmi-calculator" component={BMI} />
            <Route path="/obout" component={Obout}/>
            <Route path="/semana" component={Semana} />
          </Switch>
        </BrowserRouter>
    );
}