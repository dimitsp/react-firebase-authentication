// connect the Firebase with the React world. 
// The simple approach is to create a Firebase instance with the Firebase class, 
// and then import the instance  in every React component where it's needed. 
// That's not the best approach though, for two reasons:

// It is more difficult to test your React components.
// It is more error prone, because Firebase should only be initialized once in your application 
// and by exposing the Firebase class to every React component, 
// you could end up by mistake with multiple Firebase instances.
// An alternative way is to use React's Context API to provide a Firebase instance once 
// at the top-level of your component hierarchy. 
import React from 'react';

const FirebaseContext = React.createContext(null);

// a higher-order component.
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;
// The createContext() function essentially creates two components. 
// The FirebaseContext.Provider component is used to provide a Firebase instance once 
// at the top-level of your React component tree, 
// and the FirebaseContext.Consumer component is used to retrieve the Firebase instance 
// if it is needed in the React component. 
// For a well-encapsulated Firebase module, 
// we'll define a index.js file in our Firebase folder that exports all necessary 
// functionalities (Firebase class, Firebase context for Consumer and Provider components):