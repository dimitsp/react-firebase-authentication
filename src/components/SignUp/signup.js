import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose'

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

import './signup.styles.scss';
// It consists of the page, a form, and a link. 
// The form is used to sign up a new user to your application with username, email, and password. 
// The link will be used on the sign in page later if a user has no account yet. 
// It is a redirect to the sign up page, but not used on the sign up page itself.
const SignUpPage = () => (
   
        <div className='signup-content-card'>
            <h1 className='title'>Sign Up</h1>
           
            <SignUpForm />
        </div>
   
);

const INITIAL_STATE ={
    username: '',
    email: '',
    password: '',
    password_confirm: '',
    error: null
};

class SignUpFormBase extends Component{
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE }
    }

    // the onSubmit() class method, which will pass all the form data to the Firebase 
    //authentication API via your authentication interface in the Firebase class:
    onSubmit = event => {
        const { username, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                // If a request resolves successfully, push any route to the history object
                //and redirect back home
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
      //prevents a reload of the browser by natural submit
      event.preventDefault();
            
    };
    //update the local state
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render(){
        const {
            username,
            email,
            password,
            password_confirm,
            error,
          } = this.state;

          //validation, use an isInvalid boolean to enable or disable the submit button.
          const isInvalid =
            password !== password_confirm ||
            password === '' ||
            email === '' ||
            username === '';
        return(
            <form className='signup' onSubmit={this.onSubmit}>
                <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
                />
                <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                />
                <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                autoComplete="on"
                />
                <input
                name="password_confirm"
                value={password_confirm}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
                autoComplete="on"
                />

                <button disabled={isInvalid} type="submit">Sign Up</button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () =>(
    <p className='signup-link'>
        Dont have an account?
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
//redirect a user to another page 
const SignUpForm = compose( withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export {SignUpForm, SignUpLink};

