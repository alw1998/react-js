import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:8080/adminid'

//export const USER_NAME_SESSION_ATTRIBUTE_NAME = ''

class AuthenticationServiceAdmin {

    login(user)
    {
        return axios.post(USER_API_BASE_URL,user);
    }

   
    registerSuccessfulLogin(username,password) {
      
        console.log('registerSuccessfulLogin')
        window.sessionStorage.setItem("username", username)
        console.log("auth"+window.sessionStorage.getItem("username"))
       
    }
    logout() {
        sessionStorage.removeItem("username");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("username")
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem("username")
        if (user === null) return ''
        return user
    }
}
export default new AuthenticationServiceAdmin()
