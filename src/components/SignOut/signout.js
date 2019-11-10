import React from 'react'
import { withFirebase } from '../Firebase';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

//use the previously-defined authentication API to sign out a user, 
//passing functionality to a button in a React component is fairly straightforward
const SignOutButton =({firebase})=>(
    <button type='button' onClick={firebase.doSignOut}>
         <Link to={ROUTES.LANDING}>SingOut</Link>
    </button>
);

export default withFirebase(SignOutButton);
//The SignOutButton has access to the Firebase instance using the higher-order component. 
//Now, use the SignOutButton in the Navigation component