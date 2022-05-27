import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import UserService from '../servicesw/UserService';





class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
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
        fields["firstName"] = "";
        fields["lastName"] = "";
        fields["gender"] = "";
        fields["dateOfBirth"] = "";
        fields["contactNumber"] = "";
        fields["emailId"] = "";
        fields["password"] = "";
        fields["securityQues"] = "";
     
        this.setState({fields:fields});
        let user = {suma:this.state.fields.successmsg,firstName: this.state.fields.firstName, lastName: this.state.fields.lastName, gender: this.state.fields.gender,dateOfBirth: this.state.fields.dateOfBirth,contactNumber:this.state.fields.contactNumber,emailId: this.state.fields.emailId,password: this.state.fields.password,securityQues: this.state.fields.securityQues};
       console.log('USer => ' + JSON.stringify(user));
       UserService.addUser(user);
        alert("Profile Added Successfully");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    this.setState({showSuccessMessage:true})
    

    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your Firstname.";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your Lastname.";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "*Please select gender.";
    }
    if (!fields["dateOfBirth"]) {
      formIsValid = false;
      errors["dateOfBirth"] = "*Please select your Date Of Birth.";
    }
    if (!fields["contactNumber"]) {
      formIsValid = false;
      errors["contactNumber"] = "*Please enter your mobile no.";
    }

    if (typeof fields["contactNumber"] !== "undefined") {
      if (!fields["contactNumber"].match(/^[789][0-9]{9}$/)) {
        formIsValid = false;
        errors["contactNumber"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["emailId"]) {
      formIsValid = false;
      errors["emailId"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailId"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailId"])) {
        formIsValid = false;
        errors["emailId"] = "*Please enter valid email-ID.";
      }
    }

  

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/) ) {
        formIsValid = false;
        errors["password"] = "*Password min.length should be 8";
      }
    }
    if (!fields["securityQues"]) {
      formIsValid = false;
      errors["securityQues"] = "*Please enter Security Question.";
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
  <div id="main-registration-container">
   <div className="form">
   <h1 style={{color:"blue"}}><center><strong>Sign Up</strong></center></h1>
      <form method="post"  class="wa-validated container container-sm border" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
     <div class="form-group">
      <label>FirstName</label>
      <input type="text"  class="form-control form-check" name="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.firstName}</div>
      <label>LastName</label>
      <input type="text"  class="form-control form-check" name="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.lastName}</div>
<label for="gender">Gender</label><br/>
      <input type="radio" name="gender" value="Male" onChange={this.handleChange} />Male
      <input type="radio" name="gender" value="Female" onChange={this.handleChange} />Female
      <div className="errorMsg">{this.state.errors.gender}</div>
      <label>Date Of Birth</label><br/>
      <input type="date" name="dateOfBirth" value={this.state.fields.dateOfBirth} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.dateOfBirth}</div>
      <label>Contact Number</label>
      <input type="tel"  class="form-control form-check" name="contactNumber" value={this.state.fields.contactNumber} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.contactNumber}</div>

      <label>Email ID:</label>
      <input type="text"  class="form-control form-check" name="emailId" value={this.state.fields.emailId} onChange={this.handleChange}  />
      <div className="errorMsg">{this.state.errors.emailId}</div>
      
      <label>Password</label>
      <input type="password"  class="form-control form-check" name="password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <label>Security Question</label>
      <input type="text" name="securityQues"  class="form-control form-check" value={this.state.fields.securityQues} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.securityQues}</div>
      {this.state.fields.successmsg && <div style={{color:"green"}}><h2>Registration Successful..</h2></div>}    
      <input type="submit" className="button" onClick={this.saveUser}  value="Register"/>
     </div>
      </form>
  </div>
</div>

    );
}


}


export default RegisterForm;