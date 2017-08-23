import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import CustomerList from './components/customers/CustomerList';
import CustomerPage from './components/customers/CustomerPage';
import DevicePage from './components/devices/DevicePage';
import CustomerPublic from './components/public/CustomerPublic';
import DevicePublic from './components/public/DevicePublic';
import PrintPage from './components/print/PrintPage';

export default function getRoutes(store) {
    const ensureAuthenticated = (nextState, replace) => {
        if (!store.getState().auth.token) {
            replace('/login');
        }
    };
    const skipIfAuthenticated = (nextState, replace) => {
        if (store.getState().auth.token) {
            replace('/');
        }
    };
    const clearMessages = () => {
        store.dispatch({type: 'CLEAR_MESSAGES'});
    };
    return (
        <Route path="/" component={App}>
            <IndexRoute component={CustomerList} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
            // Public Front-End
            <Route path="/customer/:id" component={CustomerPublic} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
            <Route path="/customer/:id/devices/:did" component={DevicePublic} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
            // Logged-User Front-End
            <Route path="/customers/:id" component={CustomerPage} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
            <Route path="/customers/:id/print" component={PrintPage} onEnter={ensureAuthenticated} onLeave={clearMessages}/>
            <Route path="/customers/:id/devices/:did" component={DevicePage} onEnter={ensureAuthenticated} onLeave={clearMessages}/>

            <Route path="/signup" component={Signup} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
            <Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
            <Route path="*" component={NotFound} onLeave={clearMessages}/>
        </Route>
    );
}
