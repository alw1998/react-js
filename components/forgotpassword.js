import React from 'react';
import reactDom from 'react-dom';
import AuthenticationService from '../servicesw/AuthenticationService';
import AdminServices from '../servicesw/AdminServices';

class forgotpassword extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
           user :{},
            username: '',
            securityQues: '',
            showSuccessMessage: null,
            emailnotexist: null
        }
       
        
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
   
       this.login = this.login.bind(this);
    }
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({securityQues: event.target.value});
    }

   
    login = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
      AdminServices.getUsersById(this.state.username).then(response=>
        {
            console.log(this.state.securityQues);
            if (this.state.securityQues==response.data.securityQues) {
             
                this.props.history.push(`/changepassword/${this.state.username}`);
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
                    
                   
                    <h1 style={{color:"blue"}}><center>Forgot Password</center></h1>
                        <label class="skills" for="userid">
                            Mail Id:
                        </label>
                        <input type="text" id="userid" class="form-control" placeholder="Enter mailid" required
                        value={this.state.username}
                        onChange={this.changeUsernameHandler}></input>
                    </div>
                    <div>
                        
                        <label class="skills" for="securityQues">
                            Security:
                        </label>
                        <input type="text" id="securityQues" class="form-control" placeholder="Enter your Security" required
                         value={this.state.securityQues}
                        onChange={this.changePasswordHandler}></input>
                    </div>
                    {this.state.hasLoginFailed && <div style={{color:"red"}}>Invalid Credentials!!!</div>}
                    {this.state.emailnotexist && <div style={{color:"red"}}>emailId doesn't exist</div>}
                    <center>
                    <button className="btn btn-success" onClick={this.login}>Change Password</button>
                  </center>
                </form>
            </div>
        </div>
    );
    
}
}

export default forgotpassword;