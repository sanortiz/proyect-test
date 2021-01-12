import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyCNKa_Tdx16XxLIVqaABB4JI0Akktf4S28",
    authDomain: "login-employees.firebaseapp.com",
    projectId: "login-employees",
    storageBucket: "login-employees.appspot.com",
    messagingSenderId: "412650566712",
    appId: "1:412650566712:web:f2e8cf3f6207fa659ea2cd"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export const fire2 = fire.database().ref()

export default fire