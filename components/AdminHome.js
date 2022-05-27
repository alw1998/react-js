import React, { Component } from 'react'
import AdminService from '../servicesw/AdminServices';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                bus: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        // this.editBus = this.editBus.bind(this);
        this.deleteBus = this.deleteBus.bind(this);
    }

    deleteBus(busno){
        AdminService.deleteEmployee(busno).then( res => {
            this.setState({bus: this.state.bus.filter(bus=> bus.busno !== busno)});
        });
    }
    // viewEmployee(id){
    //     this.props.history.push(`/view-employee/${id}`);
    // }
    // editEmployee(busno){
    //     this.props.history.push(`/add-employee/${id}`);
    // }

    componentDidMount(){
        AdminService.getAllBus().then((res) => {
            this.setState({ bus: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Bus List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBus}> Add Bus</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

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
                                        bus => 
                                        <tr key = {bus.busno}>
                                             <td> { bus.busno} </td>   
                                             <td> {bus.from}</td>
                                             <td> {bus.to}</td>
                                             <td> {bus.starttime}</td>
                                             <td> {bus.endtime}</td>
                                             <td> {bus.bustype}</td>
                                             <td> {bus.fare}</td>
                                             <td> {bus.totalseat}</td>
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

export default ListEmployeeComponent;