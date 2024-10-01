import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ASignupPage() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone_number,setPhone_number]=useState('');


    const register = async () => {
        
            try{

                if(email==""||password==""||phone_number=="")
                {
                    alert("All fields are required");
                    return;
                }
                
                const response=await axios.post('https://fork_backend.rajkumar-v2022cse.workers.dev/folk_reg/new',
                    {
                        email,
                        password,
                        phone_number
                    }
                );
                console.log(response.data);
                if(response.data=="email already exists")
                {
                    alert("Email already exists");
                    return;
                }
                else if(response.data=="failed")
                {
                    alert("Failed to register");
                    return;
                }
                alert("succesfully registerd");
            }
            catch(err)
            {
                console.error(err);
                alert("something went wrong please try again later");
            }
    }


  return (
    <div id='par' className='flex flex-col w-full h-screen items-center justify-center'>

        <div className='flex flex-col items-center justify-around w-full h-full max-w-[400px] max-h-[600px] border-2 border-gray-200 shadow-md rounded-md' id='all'>

            <div id='title'>
                <h1 className='font-bold text-3xl'>Signup</h1>
            </div>

            <div id='fields' className='flex flex-col items-center gap-4 w-full'>
                <input type="text" className='border-2 border-gray-200 w-full max-w-[350px] outline-none rounded-md px-4 py-3' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
                <input type="password" className='border-2 border-gray-200 w-full max-w-[350px] outline-none rounded-md px-4 py-3' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
                <input type="number" className='border-2 border-gray-200 w-full max-w-[350px] outline-none rounded-md px-4 py-3' onChange={(e)=>setPhone_number(e.target.value)} placeholder='Phonenumber'/>
                <button className='w-full max-w-[350px] py-3 rounded-md bg-blue-600 text-white' onClick={register}>Signup</button>
                <span>Already have an account? <Link to='/alogin' className='text-blue-600'>Login</Link></span>
            </div>

            

            <div className='flex  flex-col items-center justify-between  w-full gap-4'>
                
                <div className='w-full max-w-[350px] flex flex-row items-center gap-2'> 
                    <hr className=' border-black w-full max-w-[350px] '/> 
                    Or 
                    <hr className=' border-black w-full max-w-[350px] '/>  
                </div>

                <div className='flex flex-row items-center justify-start px-7 py-3 border-2 border-gray-200 w-full max-w-[350px] rounded-md gap-16 bg-[#3b5998] cursor-pointer'>
                    <img className='rounded-full h-7 w-7 bg-white' src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" alt="" />
                    <button className='text-white'>Signup with Facebook</button>
                </div>
                
                <div className='flex flex-row items-center justify-start px-7 py-3 border-2 border-gray-200 w-full max-w-[350px] rounded-md gap-16 cursor-pointer'>
                    <img className='h-6 w-6' src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="" />
                    <button className=''>Signup with Google</button>
                </div>
                    
            </div>

        </div>

        
      
    </div>
  )
}
