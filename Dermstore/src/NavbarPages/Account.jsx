import "./Account.css"
import React, {useState} from "react"
export default function Account(){
  const [isLogin, setIsLogin] = useState(true)

  function handleSubmit(e){
      e.preventDefault()
  }

  function handleClick(e){
      e.preventDefault()
      if(isLogin){
          setIsLogin(false)
      }else{
          setIsLogin(true)
      }
  }
    const Login = () => {
        
        return(
            <>
            <div id="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required/><br/>
                    <input type="password" placeholder="Password" required/>
                </form>
                <div className="recover-password">
                    <a href="#">Forgot password</a>
                </div>
                <button className="login-btn">Login</button>
                <div className="member">
                    Don't have an account ? <a href="#" onClick={handleClick} >Sign Up</a>
                </div>
            </div>
            </>
        )
    }

    const Signup = () => {
        return(
            <>
            <div id="signup-container">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full name" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="password" placeholder="Re-Enter Password" required/>
                    <input type="email" placeholder="Emial address" required/>
                    <input type="number" placeholder="Phone Number" required/>
                </form>
                <div className="terms">
                    <input type="checkbox" id="checkbox" required/>
                    <label hemlFor="checkbox">I agree to the <a href="#">Terms & Conditions</a></label><br/>
                    <button className="signup-btn">Sign Up</button>
                    <div className="member">
                        Already have an account ? <a href="#" onClick={handleClick}>Login</a>
                    </div>
                </div>
            </div>
            </>
        )
    }


    return(
        <> 
        Account Section
    <div >{isLogin ? <Signup/> : <Login/>}</div>
        
        </>
    )
}











/*
<div id="account-section-main-div">
            <div id="login-div">
                <form id="loginform" onSubmit={handleSubmit}>
                    <p>Existing Customers</p>
                    <p>*Email Address</p>
                    <input type="text" id="email"/>
                    <p>*Password</p>
                    <input type="password" id="password"/>
                    <p style={{textDecoration:"underline"}}>FORGOT YOUR PASSWORD?</p>
                    <button type="submit">LOGIN TO YOUR ACCOUNT?</button>
                </form>
            </div>
            <div>
            </div>
        </div>



<box-icon name="user">Account</box-icon>
        <box-icon name="shopping-bag">Account</box-icon>*/


