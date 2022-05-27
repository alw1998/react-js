import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Footer from './components/footer';
import SiteInfo from './components/main';
import './css/main.css';

import LoginForm from './components/loginform';
import AdminForm from './components/adminLogin';

import RegistrationForm from './components/RegistrationForm';
import AuthenticationService from './servicesw/AuthenticationService';
import AuthenticatedRouteAdmin from './components/AuthenticatedRouteAdmin';
import adminAddBus from './components/adminAddBus';
import AdminDash from './components/adminDash';
import adminviewbus from './components/adminviewbus';
import adminviewusers from './components/adminviewusers';
import adminupdatebus from './components/adminupdatebus';
import homepage from './components/homepage';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import RegisterForm from './components/aaaa';
import aso from './components/paymentpage';
import forgotpassword from './components/forgotpassword';
import changepassword from './components/changepassword';

function App() {
  
  return (
    <div className="body">
     
    
     
      {/* <RegistrationForm/> */}
      {/* <LoginForm></LoginForm> */}
     
      <Router>
             
                <div className="container">
                    <Switch> 
                          <Route path="/summa" component={aso}></Route>
                          <Route path = "/" exact component = {SiteInfo}></Route>
                          <Route path = "/signup"  component = {RegistrationForm}></Route>
                          <Route path = "/signin"  component = {LoginForm}></Route>
                          <Route path = "/admin"  component = {AdminForm}></Route>
                          <Route path ="/forgotpassword" component ={forgotpassword}></Route>
                          <Route path ="/changepassword/:emailId" component={changepassword}></Route>
                          <AuthenticatedRouteAdmin path ="/addbus" component={adminAddBus}></AuthenticatedRouteAdmin>
                          <AuthenticatedRouteAdmin path ="/viewbus" component={adminviewbus}></AuthenticatedRouteAdmin>
                            <AuthenticatedRouteAdmin path ="/adminhome" component ={AdminDash}></AuthenticatedRouteAdmin>
                            <AuthenticatedRouteAdmin path ="/users" component={adminviewusers}></AuthenticatedRouteAdmin>
                            <AuthenticatedRouteAdmin path ="/updatebus/:busno" component={adminupdatebus}></AuthenticatedRouteAdmin>
                            <AuthenticatedRoute path="/home" component={homepage}></AuthenticatedRoute>
                           
                         
                    </Switch>
                  
                </div>
              
        </Router>
    </div>
  );
}

export default App;



