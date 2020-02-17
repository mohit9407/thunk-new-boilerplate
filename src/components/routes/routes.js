import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import NavBar from '../../containers/navbar/NavBar';

import SideBar from '../../containers/sidebar/sidebar';

export const PublicRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route {...rest} render={(routeProps) => (
            !user ? <React.Fragment>
                    <NavBar/>
                    <Component {...routeProps} />
                </React.Fragment> :
                <Redirect to='/'/>)}/>
    )
};

export const PrivateRoute = ({component: Component, user, ...rest}) => (
    <Route {...rest} render={(routeProps) => {
        return (
            user ?
                <div className="app-wrapper">
                    <SideBar/>
                    <div className="sidebar-open-body">
                        <NavBar/>
                        <Component {...routeProps} />
                    </div>
                </div>
                : <Redirect to='/login'/>
        )
    }}/>
);

export const NotFoundRoute = ({component: Component, user, ...rest}) => (
    <Route {...rest} render={(routeProps) => (
        user ?
            <div className="app-wrapper">
                <SideBar/>
                <div className="sidebar-open-body">
                    <NavBar/>
                    <Component {...routeProps} />
                </div>
            </div>
            :
            <React.Fragment><NavBar/><Component {...routeProps} /></React.Fragment>
    )}/>
);