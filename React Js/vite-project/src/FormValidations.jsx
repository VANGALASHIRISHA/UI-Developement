import React, { useState } from 'react'

export default function FormValidations() {
    const[username,setUserName]=useState();
       const[email,setEamil]=useState();
     const[password,setPassWord]=useState();
      const[confirmPassword,SetConfirmPassword]=useState()
      const display=(e)=>{
      e.preventDefault()
      console.log(username)
      console.log(email)
      console.log(password)
      console.log(confirmPassword)

      setUserName('')
      setEamil('')
      setPassWord('')
      SetConfirmPassword('')
      }
  return (
    <div>
     <h3>Registration Form</h3>
     <form className='regForm' onSubmit={display}>
        <div>
            <label>Username</label><br></br>
            <input type='text' placeholder='Enter UserName'  
            onChange={(e)=>{setUserName(e.target.value)}}
            value={username}
            ></input>
            <div>
                {error.username&&<span>{error.username}</span>}
            </div>   
        </div>
        <div>
            <label>Email</label><br></br>
            <input type='text' placeholder='Enter Your Email'
                 onChange={(e)=>{setEamil(e.target.value)}}
                     value={username}
            ></input> 
             <div>
                {error.username&&<span>{error.email}</span>}
            </div>    
        </div>
         <div>
            <label>Password</label><br></br>
            <input type='text' placeholder='EnterPassword'
                 onChange={(e)=>{setPassWord(e.target.value)}}
                  value={email}
            ></input>  
             <div>
                {error.username&&<span>{error.password}</span>}
            </div>     
        </div>
         <div>
            <label>ConfirmPassword</label><br></br>
            <input type='text' placeholder='Enter ConfirmPassword'
                 onChange={(e)=>{SetConfirmPassword(e.target.value)}}
    value={confirmPassword}
            ></input>  
         <div>
                {error.username&&<span>{error.confirmPassword}</span>}
            </div>  
  <div>
    <input type='submit' className='btn btn-primary'></input>
  </div>
        </div>
     </form>
    </div>
  )
}
