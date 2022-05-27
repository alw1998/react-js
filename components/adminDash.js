import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
import Header from '../components/Adminheader';
import Footer from './footer';
import AuthenticatedRouteAdmin from './AuthenticatedRouteAdmin';

export class AdminDash extends React.Component{

    render() {
        return (
        
          <div>
            <div className="head">
            
            <div class="nav-links">
			            <i class="fa fa-times"></i>
			                <ul>
				                <li><a href="/">HOME</a></li>
				                   
				                <li><Link onClick={AuthenticationServiceAdmin.logout}>LOGOUT</Link></li>
		                	</ul>
		            	</div>

            </div>
         
          
            <div className="App">
              
           <br/>
            <h1> Welcome,Admin</h1>
            {/* <input type="submit" class="btn btn-primary" value="Add Bus"></input> */}
           <a href="/addbus"> <button className="btn" value="Add Bus" >Add Bus</button></a>
            <br/>
          <a href="/viewbus">  <button className="btn" value="View Bus" >View Bus</button></a>
            <br/>
         <a href="/users">   <button  className="btn" value="View User Details" >View User Details</button></a>
            <br/>
         
           
          </div>
          
          </div>
        );
        
      }
}
export default AdminDash;