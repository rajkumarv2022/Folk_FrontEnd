import React from 'react'
import { Link } from 'react-router-dom'

export default function ALoginpage() {
  return (
    <div id='par' className='flex flex-col w-full h-screen items-center justify-center'>

        <div className='flex flex-col items-center justify-around w-full h-full max-w-[400px] max-h-[600px] border-2 border-gray-200 shadow-md rounded-md' id='all'>

            <div id='title'>
                <h1 className='font-bold text-3xl'>Login</h1>
            </div>

            <div id='fields' className='flex flex-col items-center gap-4 w-full'>
                <input type="text" className='border-2 border-gray-200 w-full max-w-[350px] outline-none rounded-md px-4 py-3' placeholder='Email'/>
                <input type="password" className='border-2 border-gray-200 w-full max-w-[350px] outline-none rounded-md px-4 py-3' placeholder='Password'/>
                <button className='w-full max-w-[350px] py-3 rounded-md bg-blue-600 text-white'>Login</button>
                <span>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
            </div>

            

            <div className='flex  flex-col items-center justify-between  w-full gap-4'>
                
                <div className='w-full max-w-[350px] flex flex-row items-center gap-2'> 
                    <hr className=' border-black w-full max-w-[350px] '/> 
                    Or 
                    <hr className=' border-black w-full max-w-[350px] '/>  
                </div>

                <div className='flex flex-row items-center justify-start px-7 py-3 border-2 border-gray-200 w-full max-w-[350px] rounded-md gap-16 bg-[#3b5998] cursor-pointer'>
                    <img className='rounded-full h-7 w-7 bg-white' src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png" alt="" />
                    <button className='text-white'>Login with Facebook</button>
                </div>
                
                <div className='flex flex-row items-center justify-start px-7 py-3 border-2 border-gray-200 w-full max-w-[350px] rounded-md gap-16 cursor-pointer'>
                    <img className='h-6 w-6' src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="" />
                    <button className=''>Login with Google</button>
                </div>
                    
            </div>

        </div>

        
      
    </div>
  )
}
