import React, { useState } from 'react'
import { Link } from 'react-router';

const Signup = () => {
  // Initialise the hooks
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");



  return (
    <div className='row justify-content-center mt-4'>
       <div className="card col-md-6 shadow p-4">
         <h1 className='text-primary'>Signup</h1>

         <form>
          <input type="text" 
          placeholder='Enter username'
           className='form-control'
            value={username} 
            onChange={(e) => setusername(e.target.value)} 
            required /> <br />

            {/* {username} */}

          <input type="email" 
          placeholder='Enter email address' 
          className='form-control'
           value={email}
           onChange={(e) => setEmail(e.target.value)}/> <br />

           {/* {email} */}

          <input type="password" 
          placeholder='Enter the password'
          className='form-control'
           value={password}
           onChange={(e) => setPassword(e.target.value)}/> <br />

           {/* {password} */}

          <input type="number" 
          placeholder='Enter your mobile number' 
          className='form-control'
           value={phone}
           onChange={(e) => setPhone(e.target.value)} /> <br />
           {/* {phone} */}

          <input type="button" value="Signup" className='btn btn-primary'/> 
          <br /> <br />

          Already have an account? <Link to={'/signin'}>signin</Link>
         </form>
       </div>
    </div>
  )
}

export default Signup;

// Research on Axios module in reactjs