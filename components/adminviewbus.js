import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AdminService from '../servicesw/AdminServices';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';
import Adminheader from '../components/Adminheader';
class adminviewbus extends Component {
    constructor(props) {
        super(props)

        this.state = {
                bus: []
        }
       
        this.editbus = this.editbus.bind(this);
        this.deletebus = this.deletebus.bind(this);
    }

    deletebus(busno){
        AdminService.deletebus(busno).then( res => {
            this.setState({bus: this.state.bus.filter(bus1=> bus1.busno !== busno)});
        });
       
    }
    // viewEmployee(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    editbus(busno){
        this.props.history.push(`/updatebus/${busno}`);
    }

    componentDidMount(){
        AdminService.getAllBus().then((res) => {
            this.setState({ bus: res.data});
        });
    }

   

    render() {
        return (
            <div>
               
               <div className="head">
            
            <div class="nav-links">
			            <i class="fa fa-times"></i>
			                <ul>
				                <li><a href="/">HOME</a></li>
                        <li><a href="/addbus">ADD NEW BUS</a></li>
				                   
				                <li><Link onClick={AuthenticationServiceAdmin.logout}>LOGOUT</Link></li>
		                	</ul>
		            	</div>

            </div>
                
              
                
                 <br></br>
                 <div className = "u">
                   <center><h1>All Bus Details</h1></center><br/>
                        <table className = "table">

                            <thead>
                                <tr>
                                    <th> Bus No</th>
                                    <th> Start Location</th>
                                    <th> End Location</th>
                                    <th> Start Time</th>
                                    <th> End Time</th>
                                    <th> Bus Type</th>
                                    <th> Fare</th>
                                    <th> No of Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.bus.map(
                                        bus1 => 
                                        <tr key = {bus1.busno}>
                                             <td> { bus1.busno} </td>   
                                             <td> {bus1.from}</td>
                                             <td> {bus1.to}</td>
                                             <td> {bus1.starttime}</td>
                                             <td> {bus1.endtime}</td>
                                             <td> {bus1.bustype}</td>
                                             <td> {bus1.fare}</td>
                                             <td> {bus1.totalseat}</td>
                                            <td>
                                                 <button onClick={ () => this.editbus(bus1.busno)} >Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletebus(bus1.busno)} >Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                             </td>
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

export default adminviewbus;