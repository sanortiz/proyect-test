import './App.css';
import Routing from './Containers/Routing';
import { HashRouter } from "react-router-dom";
import Menu from './Containers/Routing/menu';
import React, {useState, useEffect} from 'react';
import fire from "./Components/login/firebase";
import Login from "./Components/login/login-app";
import Hero from './Components/login/Hero';

function App() {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState('false')

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)  
            break;
          case "auth/wrong-password":
            setPasswordError(err.message)
            break;
          default:
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)  
            break;
          case "auth/weak-password":
            setPasswordError(err.message)
            break;
          default:
            break;
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      clearInputs()
      if (user) {
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  })

  return (
    <div className="App">
      <header>
      <div>
          <HashRouter>
              <Menu />
          </HashRouter>
        </div>
      </header>
      
      <main>
        <Routing />
        {user ? 
          <Hero handleLogout={handleLogout} />
         : 
          <Login 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        }
      </main>
    </div>
  );
}

export default App;
