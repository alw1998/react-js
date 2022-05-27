import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthenticationService from '../servicesw/AuthenticationService';
import AdminForm from './adminLogin';
import UserService from '../servicesw/UserService';
import AdminService from '../servicesw/AdminServices';
import { right } from '@popperjs/core';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          errors: {},
          bus:[]
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
       

      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            
            fields["from"] = "";
            fields["to"] = "";
            
         
            this.setState({fields:fields});
            
          UserService.searchbus(this.state.fields.from,this.state.fields.to).then((res) => {
            this.setState({ bus: res.data});
        });
            // alert("Bus updated Successfully");
            // this.props.history.push('/viewbus');
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        this.setState({showSuccessMessage:true})
        
  
    
        if (!fields["from"]) {
          formIsValid = false;
          errors["from"] = "*Please select From Location.";
        }
  
      
  
        if (!fields["to"]) {
          formIsValid = false;
          errors["to"] = "*Please select To Location.";
        }
        
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
      componentDidMount(){
        AdminService.getAllBus().then((res) => {
            this.setState({ bus: res.data});
        });}
      render(){
    return(
      
        <div className="coll">
            
        
        
          <div className="col">
          <div className="hed">
            
            <div class="nav-links">
			            <i class="fa fa-times"></i>
			                <ul>
				                <li><a href="/">HOME</a></li>
                        <li><a href="">ABOUT US</a></li>
				                <li><a href="">CONTACT US</a></li>
				                <li><Link onClick={AuthenticationService.logout}>LOGOUT</Link></li>
		                	</ul>
		            	</div>

            </div>
            <div className="white">
                <div className="co">
                <form method="post"  class="wa-validated container container-sm borde" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
               <div className="split">
                <label style={{fontSize:20}} for="from">From Location</label><br/>
        <select name="from" id="startLocation" className="from" onChange={this.handleChange}>
          <option  value="">Select</option>
          <option name="from" value="chennai">Chennai</option>
          <option name="from" value="coimbatore">Coimbatore</option>
          <option name="from" value="hyderabad">Hyderabad</option>
          <option name="from" value="bangalore">Bangalore</option>
          </select>
          <div className="errorMsg">{this.state.errors.from}</div><br/>
          </div>
          <div className="split">
          <label style={{fontSize:20}} for="to" >To Location</label><br/>
        <select name="to" id="toLocation" className="to" onChange={this.handleChange}>
          <option  value="">Select</option>
          <option name="to" value="chennai">Chennai</option>
          <option name="to" value="coimbatore">Coimbatore</option>
          <option name="to" value="hyderabad">Hyderabad</option>
          <option name="to" value="bangalore">Bangalore</option>
          </select>
          <div className="errorMsg">{this.state.errors.to}</div><br/>
          </div>
      <center> <input type="submit" className="searchbutton"  value="search"/></center>
                  </form>  
                </div>
                </div>
        </div>
                {/* <div><Link className="nav-link text-info" style={{float:"right"}} onClick={AuthenticationService.logout}>Logout</Link></div> */}
                <div>
                  
                   {/* <h2 className="text-center">Bus List</h2> */}
                
                 <br></br>
                 <div>{
                                    this.state.bus.map(
                                        bus12 => 
                 <div class="roww">
            <div class="photo">
                <img src="https://img.freepik.com/free-vector/bus-logo-abstract_7315-17.jpg?size=626&ext=jpg" alt="product image" width="200" height="200"/>
            </div>
           
            <h3 >Bus No:<span style={{color:'blue'}}>{bus12.busno}</span></h3><br/>
                                    
            <h4><strong style={{color:'blue'}}>{bus12.from}</strong></h4>
            <p>To</p>
            <h4><strong style={{color:'blue'}}>{bus12.to}</strong></h4><br/>
            <h4>Start Time:<span style={{color:'blue'}} >{bus12.starttime}</span></h4>
            <h4>End Time:<span style={{color:'blue'}} >{bus12.endtime}</span></h4>
            <h4>Seat Left:<span style={{color:'blue'}} >{bus12.totalseat}</span></h4><br/>
             <h3 style={{color:'blue'}} >RS:{bus12.fare} </h3>
            <div >
                <button className="btn" >Book Ticket</button>
            </div>
    
        </div>
                 ) }</div> 
      </div>
        </div>
       
    );
                    }
                }

export default home;