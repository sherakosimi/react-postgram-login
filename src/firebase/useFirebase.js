import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { config } from "./config";
import { } from "antd";
import FacebookLoginWithButton from 'react-facebook-login';

const firebaseContext = React.createContext();
firebase.initializeApp(config);

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

  const register = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const passwordchange = (email) => {
    return firebase.auth().sendPasswordResetEmail(email)
  };

  const signout = () => {
    return firebase.auth().signOut();
  };

  const changepassword = (newPassword) => {
    var user = firebase.auth().currentUser;
    user.updatePassword(newPassword);
  }

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider)

  }
  const userUpload = (user) => {
    try {
  var ref = firebase.database().ref('users/'+user.displayName);
  var data = {
    email: user.email,
    userId: user.displayName,
    photoURL: user.photoURL
  }
  ref.push(data)
console.log(" user success upload")}
  catch (error){ 
   console.log(error)
  }
  }
  

  const reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    console.log(user.email, currentPassword)
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);

    return user.reauthenticateWithCredential(cred);
  }

  const createCard = (values) => {
    console.log("values are", values);

    var ref = firebase.database().ref('cards/'+values.title);
    console.log(user)
    var data = {

      title: values.title,
      brand: values.brand,
      category: values.category,
      price: values.price,
      description: values.description,
      img: values.image,
     // userId: user.displayName
    }

    ref.push(data)

      
    
  }

  const getCards=()=>{
    return firebase.database().ref('/cards/').once('value')

  }



  return {
    userUpload,
    getCards,
    user,
    register,
    login,
    signout,
    passwordchange,
    changepassword,
    reauthenticate,
    signInWithFacebook,
    createCard,
    useFirebase
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
