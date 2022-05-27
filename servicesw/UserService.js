import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080";

class UserService {

    addUser(user){
        return axios.post(EMPLOYEE_API_BASE_URL+'/newuser', user);
    }
   searchbus(from,to){
       return axios.get(EMPLOYEE_API_BASE_URL+'/searchbus/'+from+'/'+to);
   }
}

export default new UserService();