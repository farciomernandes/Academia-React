import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import BMI from './pages/BmiCalculator';
import Obout from './pages/OboutUs';
import Semana from './pages/Semana';
import Register from './pages/Register';
import Login from './pages/Logon';
import Treinos from './pages/TrainingRegister';
import RegisterOffice from './pages/RegisterOffice';
import LoginOffice from './pages/LoginOffice';
import OfficeController from './pages/OfficeClients';
import HomeOffice from './pages/HomeOffice';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/bmi-calculator" component={BMI} />
            <Route path="/obout" component={Obout}/>
            <Route path="/semana" component={Semana} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/office" component={HomeOffice} />
            <Route path="/training-register" component={Treinos} />
            <Route path="/register-office" component={RegisterOffice} />
            <Route path="/login-office" component={LoginOffice} />
            <Route path="/office-clients" component={OfficeController} />
          </Switch>
        </BrowserRouter>
    );
}