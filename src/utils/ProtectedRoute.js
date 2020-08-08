import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../helpers/auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={props => {
                if (isLoggedIn()) {
                    return <Component {...props} />
                }
                else {
                    return (<Redirect to={{ pathname: "/login" }} />);
                }
            }}
        />

    )
}