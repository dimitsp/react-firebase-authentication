import React from 'react';

import {Link} from 'react-router-dom';
import SignOutButton from '../SignOut/signout';
import * as ROUTES from '../../constants/routes';

import './navigation.scss';

//implement the Navigation component. 
//It uses the Link component of React Router to enable navigation to different routes. 
//These routes are defined previously in constants file. 
const Navigation = () =>(
    <div>
        <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
    </div>
);
export default Navigation;