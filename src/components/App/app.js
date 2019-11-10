import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import LandingPage from '../Landing/landing';
import SignUpPage from '../SignUp/signup';
import SignInPage from '../SignIn/signin';
import PasswordForgetPage from '../PasswordForget/password-forget';
import HomePage from '../Home/home';
import AccountPage from '../Account/account';
import AdminPage from '../Admin/admin';

import * as ROUTES from '../../constants/routes';
import './app.scss';


// the App component will use the Navigation component. 
//Also, it uses the Router component provided by React Router. 
//The Router makes it possible to navigate from URL-to-URL on the client-side application 
//without another request to a web server for every route change. 
//The application is only fetched once from a web server, after which all routing is done 
//on the client-side with React Router.

const App = () =>(
    <Router>
        <div>
            <Navigation />
            <hr className ='hrdeco' />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
        
    </Router>
);
export default App;