import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBkr70LHNo-WI6B7XXLlN5v2G_pAf2nNAE",
    authDomain: "crud-empleados-f689c.firebaseapp.com",
    databaseURL: "https://crud-empleados-f689c-default-rtdb.firebaseio.com",
    projectId: "crud-empleados-f689c",
    storageBucket: "crud-empleados-f689c.appspot.com",
    messagingSenderId: "107785728905",
    appId: "1:107785728905:web:754364a62ef02b2ecda758"
  };
  // Initialize Firebase
  var fireDB = firebase.initializeApp(firebaseConfig)


export default fireDB.database().ref()