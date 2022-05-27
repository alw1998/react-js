import React, { Component } from 'react'
import reactDom from 'react-dom';
import AuthenticationService from '../servicesw/AuthenticationService';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
class AdminForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user :{},
            username: '',
            password: '',
            showSuccessMessage: null,
            hasLoginFailed: null
        };
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
      
        AuthenticationServiceAdmin.login(user).then(response =>{
          
           console.log("success"+response.data.username);
          AuthenticationServiceAdmin.registerSuccessfulLogin(this.state.username, this.state.password)
           this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
           this.props.history.push('/adminhome')
           
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true ,
                    username:'',
                    password:''
                })
            })


        }
      

    
render(){
    return(
        <div class="rrow">
            
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
            <div class="adminlogin">
                <div className="loginformadmin">
                <form >
                    <div class="form-group">
                    <h1 style={{color:"blue"}}><center>Admin Login Page</center></h1>
                        <label class="skills" for="userid">
                            User Id:
                        </label>
                        <input type="text" id="userid" class="form-control" placeholder="Enter userid" value={this.state.username} onChange={this.changeUsernameHandler}></input>
                    </div>
                    <div>
                        
                        <label class="skills" for="password">
                            Password:
                        </label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password" value={this.state.password} onChange={ this.changePasswordHandler}></input>
                    </div>
                   
                    {this.state.hasLoginFailed && <div style={{color:"red"}}>Invalid Credentials!!</div>}

                    <center>
                   <button style={{marginLeft: "10px"}} onClick={this.login} className="btn btn-success">LogIn</button>
                  
                    </center>
                    </form>
                    </div>
            </div>
        </div>
    );
    
}
}

export default AdminForm;