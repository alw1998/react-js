import React from 'react';
import reactDom from 'react-dom';
import AuthenticationService from '../servicesw/AuthenticationService';
import AdminServices from '../servicesw/AdminServices';

class changepassword extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
           user :{},
           emailId:this.props.match.params.emailId,
            password: '',
            repassword: '',
            showSuccessMessage: null,
           hasLoginFailed:null
        }
       
        
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
   
       this.login = this.login.bind(this);
    }
    changeUsernameHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({repassword: event.target.value});
    }

   
    login = (e) => {
        e.preventDefault();
        let user = {emailId: this.state.emailId, password: this.state.password};
        if(this.state.password==this.state.repassword){
            AdminServices.updatepassword(this.state.emailId,user);
        
        alert("Password Updated Successfully");
            this.props.history.push('/signin');
    }else{
        this.setState({hasLoginFailed:true})
    }

      AdminServices.getUsersById(this.state.username).then(response=>
        {
            console.log(this.state.securityQues);
            if (this.state.securityQues==response.data.securityQues) {
             
                this.props.history.push('/changepassword');
            }
            else{
                this.setState({ showSuccessMessage: false });
                this.setState({hasLoginFailed:true})
            }

        }
        
        ).catch(()=>{
         
            this.setState({emailnotexist:true})
        }


        )
      
 


        }
    render(){
    return(
        <div class="rowform">
            <div  class="loginform">
                <form>
                    <div class="form-group">
                    
                   
                    <h1 style={{color:"blue"}}><center>Change Password</center></h1>
                        <label class="skills" for="userid">
                            New Password:
                        </label>
                        <input type="text" id="userid" class="form-control" placeholder="Enter New Password" required
                        value={this.state.password}
                        onChange={this.changeUsernameHandler}></input>
                    </div>
                    <div>
                        
                        <label class="skills" for="securityQues">
                            Repeat Password:
                        </label>
                        <input type="text" id="securityQues" class="form-control" placeholder="Repeat the same Password" required
                         value={this.state.repassword}
                        onChange={this.changePasswordHandler}></input>
                    </div>
                    {this.state.hasLoginFailed && <div style={{color:"red"}}>Password doesn't match</div>}
                   
                    <center>
                    <button className="btn btn-success" onClick={this.login}>Update Password</button>
                  </center>
                </form>
            </div>
        </div>
    );
    
}
}

export default changepassword;