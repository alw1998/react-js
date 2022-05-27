import React from 'react';
import reactDom from 'react-dom';
import AuthenticationService from '../servicesw/AuthenticationService';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import UserService from '../servicesw/UserService';
import AdminService from '../servicesw/AdminServices';
class aso extends React.Component{
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
        <div class="col">
            <div className="coll">
        
        {/* <div><Link className="nav-link text-info" style={{float:"right"}} onClick={AuthenticationService.logout}>Logout</Link> */}
        {/* <h5 className="nav-link text-info" style={{float:right}}>Welcome,</h5>
        </div> */}
          <div className="colee">
            <div className="white">
                <div className="co">
                <form method="post"   name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
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
           
            <h4>Bus No:{bus12.busno}</h4>
                                    
            <p>From:<strong>{bus12.from}</strong></p>
            <p>To:<strong>{bus12.to}</strong></p>
            <p >Rs 99 <span >per day</span></p>
            <div >
                <button >Add to cart</button>
            </div>
    
        </div>
                 ) }</div> 
      </div>
        </div>
        </div>
    );
    
}
}

export default aso;