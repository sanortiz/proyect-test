import React from 'react'
import "../login/login-app.css";

function Login(props){
    
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    required 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? 
                        <>
                            <button onClick={handleLogin} id="btn">Sing in</button>
                            <p>don't have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sing up</span>
                            </p>
                        </>
                        : 
                        <>
                            <button onClick={handleSignup} id="btn">Sing up</button>
                            <p>Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Login