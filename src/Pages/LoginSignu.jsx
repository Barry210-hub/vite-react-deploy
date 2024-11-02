import React from 'react'
import './CSS/login.css'

const LoginSignu = () => {
  return (
    <div className='login'>
     

      <div className="login_exp"> 
        <h1>Sign Up</h1>
        <div className="inputs">
          <input type="text" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <input type="password" name="" id="" placeholder='password' />

        </div>
        <button className='btn-login' >Continue</button>
        <div className="login-expl">

        <p>Already have an account?</p><span>Login here</span>
        </div>
        <div className="login-policy">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      </div>
 
  )
}

export default LoginSignu
