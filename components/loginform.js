import React from 'react';
import reactDom from 'react-dom';
import AuthenticationService from '../servicesw/AuthenticationService';

class LoginForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
           user :{},
            username: '',
            password: '',
            showSuccessMessage: null,
            hasLoginFailed: null
        }
       
        
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
   
       this.login = this.login.bind(this);
    }
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

   
    login = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password};
      
        AuthenticationService.login(user).then(response =>{
          
           console.log("success"+response.data.username);
          AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
           this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
           this.props.history.push('/home')
           
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true ,
                    username:'',
                    password:'',
                   
                })
            })


        }
    render(){
    return(
        <div class="rowform">
            <div  class="loginform">
                <form>
                    <div class="form-group">
                    
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <h1 style={{color:"blue"}}><center>Login Page</center></h1>
                        <label class="skills" for="userid">
                            User Id or Mail Id:
                        </label>
                        <input type="text" id="userid" class="form-control" placeholder="Enter userid or mailid" required
                        value={this.state.username}
                        onChange={this.changeUsernameHandler}></input>
                    </div>
                    <div>
                        
                        <label class="skills" for="password">
                            Password:
                        </label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password" required
                         value={this.state.password}
                        onChange={this.changePasswordHandler}></input>
                    </div>
                    {this.state.hasLoginFailed && <div style={{color:"red"}}>Invalid Credentials!!!</div>}
                    <center>
                    <button className="btn btn-success" onClick={this.login}>Login</button>
                  
                    </center>
                    </form>
                    <center>
                    <a href="/signup"> <button value="Signup" id="navigation" className="btn">New User Signup</button></a>
                    <a href="/forgotpassword"> <button id="navigation" className="btn">Forgot Password</button></a>
                    </center>
   
            </div>
        </div>
    );
    
}
}

export default LoginForm;