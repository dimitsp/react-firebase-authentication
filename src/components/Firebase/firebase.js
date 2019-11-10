import app from 'firebase/app';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBdh3YvfWC31asXasQCICIfBnHBZc9d2xc",
    authDomain: "react-firebase-auth-81966.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-81966.firebaseio.com",
    projectId: "react-firebase-auth-81966",
    storageBucket: "react-firebase-auth-81966.appspot.com",
    messagingSenderId: "237135017729",
    appId: "1:237135017729:web:4db5a6f8d01af6a249cd00",
    measurementId: "G-PZWSZEB2LP"
  };

  class Firebase{
      constructor(){
          app.initializeApp(config);
          this.auth = app.auth();
      }

      //**Auth API  will connect to the Firebase API. */
      //define all the authentication functions as class methods step by step. 
      //They will serve our communication channel from the Firebase class to the Firebase API.

      //First, the sign up function (registration) takes email and password parameters for its 
      //function signature and uses an official Firebase API endpoint to create a user:
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

      //login/sign-in function, which takes email and password parameters, as well:
      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

      doSignOut = () => this.auth.signOut();

      //two more authentication methods to reset and change 
      //a password for an authenticated user:
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
  }
  export default Firebase;