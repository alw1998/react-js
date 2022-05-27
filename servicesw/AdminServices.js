import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/Admin";

class AdminService {

    getAllUsers(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/users');
    }
    getAllBus(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/allbus');
    }

    addBus(bus){
        return axios.post(EMPLOYEE_API_BASE_URL+'/addbus', bus);
    }

    updateBus(bus, busno){
        return axios.put(EMPLOYEE_API_BASE_URL +'/allbus/' + busno, bus);
    }

    deletebus(busno){
        return axios.delete(EMPLOYEE_API_BASE_URL +'/allbus/' +busno);
    }
    getUsersById(emailId){
        return axios.get(EMPLOYEE_API_BASE_URL+'/users/'+emailId);
    }
    updatepassword(emailId,user){
        return axios.put(EMPLOYEE_API_BASE_URL+'/users/'+emailId,user);

    }
}

export default new AdminService();