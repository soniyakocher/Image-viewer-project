import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './screens/login/Login';


//Router class for navigation to the pages
class AppRouter extends Component {
    constructor() {
        super()
        //Base Url
        this.baseUrl = "https://graph.instagram.com/";
    }

    render() {
        return (
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    
                </div>
            </Router>
        )
    }
}
         
export default AppRouter;