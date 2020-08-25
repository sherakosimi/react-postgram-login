import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { config } from "./config";
import {} from "antd";
import FacebookLoginWithButton from 'react-facebook-login';

const firebaseContext = React.createContext();

// Provider hook that initializes firebase, creates firebase object and handles state
function useProvideFirebase() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (!firebase.apps.length) {
      console.log("I am initializing new firebase app");
      firebase.initializeApp(config);
    }

    const unsubscribeFunction = firebase.auth().onAuthStateChanged((user) => {
      console.log("got new user", user);
      setUser(user);
    });

    return function cleanup() {
      // looks like you don't need to do any clean up, but if you do, do it here
      unsubscribeFunction();
    };
  }, []);

  const register = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const passwordchange = async (email)=>{
    await firebase.auth().sendPasswordResetEmail(email)
  };

  const signout = async () => {
    await firebase.auth().signOut();
  };

  const changepassword = async (newPassword) =>{
    var user = firebase.auth().currentUser;
    user.updatePassword(newPassword);
  }

  const signInWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

const reauthenticate = async (currentPassword) => {
  var user = firebase.auth().currentUser;
  console.log(user.email, currentPassword)
  var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

  await user.reauthenticateWithCredential(cred);
}


  


  return {
    user,
    register,
    login,
    signout,
    passwordchange,
    changepassword,
    reauthenticate,
    signInWithFacebook
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useFirebase().
export function ProvideFirebase({ children }) {
  const firebaseHook = useProvideFirebase();
  return (
    <firebaseContext.Provider value={firebaseHook}>
      {children}
    </firebaseContext.Provider>
  );
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useFirebase = () => {
  return React.useContext(firebaseContext);
};
