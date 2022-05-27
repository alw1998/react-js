import React from 'react';
import { Link } from 'react-router-dom';
import AdminServices from '../servicesw/AdminServices';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
import Adminheader from '../components/Adminheader';




class adminUpdateBus extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        busno:this.props.match.params.busno,
        fields: {},
        errors: {},
        
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
          fields["starttime"] = "";
          fields["endtime"] = "";
          fields["bustype"] = "";
          fields["fare"] = "";
          fields["totalseat"] = "";
       
          this.setState({fields:fields});
          let bus = {busno: this.state.busno,from: this.state.fields.from, to: this.state.fields.to,starttime: this.state.fields.starttime,endtime:this.state.fields.endtime,bustype: this.state.fields.bustype,fare: this.state.fields.fare,totalseat: this.state.fields.totalseat};
         console.log('USer => ' + JSON.stringify(bus));
        AdminServices.updateBus(bus,this.state.busno)
          alert("Bus updated Successfully");
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
      if (!fields["starttime"]) {
        formIsValid = false;
        errors["starttime"] = "*Please select Start Time.";
      }
      if (!fields["endtime"]) {
        formIsValid = false;
        errors["endtime"] = "*Please select End Time.";
      }

    
      if (!fields["bustype"]) {
        formIsValid = false;
        errors["bustype"] = "*Please select Bus Type.";
      }

        

      if (!fields["fare"]) {
        formIsValid = false;
        errors["fare"] = "*Please enter fare amount.";
      }

      if (typeof fields["fare"] !== "undefined") {
        if (!fields["fare"].match(/[0-9]+([\.][0-9]{0,2})?$/) ) {
          formIsValid = false;
          errors["fare"] = "*plz enter number only";
        }
      }
      if (!fields["totalseat"]) {
        formIsValid = false;
        errors["totalseat"] = "*Please enter total no of Seats.";
      }
      if (typeof fields["totalseat"] !== "undefined") {
        if (!fields["totalseat"].match(/^[0-9]{2}$/) ) {
          formIsValid = false;
          errors["totalseat"] = "*plz enter valid number only.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    // saveUser = (e) => {
        
    //     e.preventDefault();
    //     let user = {suma:this.state.fields.successmsg,firstName: this.state.fields.firstName, lastName: this.state.fields.lastName, gender: this.state.fields.gender,dateOfBirth: this.state.fields.dateOfBirth,contactNumber:this.state.fields.contactNumber,emailId: this.state.fields.emailId,password: this.state.fields.password,securityQues: this.state.fields.securityQues};
    //     console.log('USer => ' + JSON.stringify(user));
    //     // UserService.addUser(user);
        
      
    //   }
    

  render() {
    return (
      <div>
        <div className="head">
            
            <div class="nav-links">
			            <i class="fa fa-times"></i>
			                <ul>
				                <li><a href="/">HOME</a></li>
                        <li><a href="/viewbus">BUS DETAILS</a></li>
				                   
				                <li><Link onClick={AuthenticationServiceAdmin.logout}>LOGOUT</Link></li>
		                	</ul>
		            	</div>

            </div>
    <div id="main-registration-container">
     <div className="form">
       <br/>
       <br/>
    
        <form method="post"  class="wa-validated container container-sm border" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       <div class="form-group">
       <h1>Bus No:{this.state.busno}</h1>
        
        <label for="from">From Location</label><br/>
        <select name="from" id="startLocation" onChange={this.handleChange}>
          <option  value="">Select</option>
          <option name="from" value="chennai">Chennai</option>
          <option name="from" value="coimbatore">Coimbatore</option>
          <option name="from" value="hyderabad">Hyderabad</option>
          <option name="from" value="bangalore">Bangalore</option>
          </select>
          <div className="errorMsg">{this.state.errors.from}</div><br/>
          <label for="to" >To Location</label><br/>
        <select name="to" id="toLocation" onChange={this.handleChange}>
          <option  value="">Select</option>
          <option name="to" value="chennai">Chennai</option>
          <option name="to" value="coimbatore">Coimbatore</option>
          <option name="to" value="hyderabad">Hyderabad</option>
          <option name="to" value="bangalore">Bangalore</option>
          </select>
          <div className="errorMsg">{this.state.errors.to}</div><br/>
       

        <label>Start Time</label><br/>
        <input type="time" class="form-control form-check" name="starttime" value={this.state.fields.starttime} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.starttime}</div>
        <label>End Time</label>
        <input type="time"  class="form-control form-check" name="endtime" value={this.state.fields.endtime} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.endtime}</div>
        <label for="bustype">Bus Type</label><br/>
      <input type="radio" name="bustype" value="Ac" onChange={this.handleChange} />Ac
      <input type="radio" name="bustype" value="Non Ac" onChange={this.handleChange} />Non Ac
      <div className="errorMsg">{this.state.errors.bustype}</div>

        <label>Fare</label>
        <input type="number"  class="form-control form-check" name="fare" value={this.state.fields.fare} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.fare}</div>
        
        <label>Total Seat</label>
        <input type="number"  class="form-control form-check" name="totalseat" value={this.state.fields.totalseat} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.totalseat}</div>
       
         
        <input type="submit" className="button" onClick={this.saveUser}  value="Update"/>
       </div>
        </form>
    </div>
</div>
</div>
      );
  }


}


export default adminUpdateBus;