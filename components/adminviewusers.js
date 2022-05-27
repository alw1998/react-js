import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminService from '../servicesw/AdminServices';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
import Adminheader from '../components/Adminheader';
class adminviewusers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: []
        }
        // this.addEmployee = this.addEmployee.bind(this);
        // // this.editBus = this.editBus.bind(this);
        // this.deleteBus = this.deleteBus.bind(this);
    }

    // deleteBus(busno){
    //     AdminService.deleteEmployee(busno).then( res => {
    //         this.setState({bus: this.state.bus.filter(bus=> bus.busno !== busno)});
    //     });
    // }
    // viewEmployee(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(busno){
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    componentDidMount(){
        AdminService.getAllUsers().then((res) => {
            this.setState({ user: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <Adminheader/>
                 <div><Link className="nav-link text-info" style={{float:"right"}} onClick={AuthenticationServiceAdmin.logout}>Logout</Link></div>
                 <h2 className="text-center">Users List</h2>
                
                 <br></br>
                 <div className = "row">
                     <center><h1>All User Details</h1></center>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Gender</th>
                                    <th> Date Of Birth</th>
                                    <th> Contact Number</th>
                                    <th> Email Id</th>
                                    <th> Security Question</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    this.state.user.map(
                                        user => 
                                        <tr key = {user.emailId}>
                                             <td> {user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.gender}</td>
                                             <td> {user.dateOfBirth}</td>
                                             <td> {user.contactNumber}</td>
                                             <td> {user.emailId}</td>
                                             <td> {user.securityQues}</td>
                                             
                                             {/* <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default adminviewusers;