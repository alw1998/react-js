import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../servicesw/AuthenticationService';
import AuthenticationServiceAdmin from '../servicesw/AuthenticationServiceAdmin';

class AuthenticatedRouteAdmin extends Component {
    render() {
        if (AuthenticationServiceAdmin.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/" />
        }

    }
}
export default AuthenticatedRouteAdmin;
