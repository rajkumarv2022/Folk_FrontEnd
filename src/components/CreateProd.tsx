import React, { useState } from 'react'

export default function CreateProd() {

  const[name,setName]=useState('');
  const[prof,setProf]=useState('');
  const[gender,setGender]=useState('');
  const[price,setPrice]=useState('');
  const[imgurl,setImgurl]=useState(''); 

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='flex flex-col gap-8 w-full max-w-[600px] border-2 border-blue-500 h-full max-h-[600px] items-center justify-center bg-gray-200'>
        <h1 className='text-2xl'>Create Product</h1>
        <form action="" className='flex flex-col gap-8 w-full max-w-[500px]'>
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            <select className='border-2 border-gray-500 px-4 py-3 w-full outline-none' onChange={(e)=>setProf(e.target.value)}>
                <option value="">Select Proffesion</option>
                <option value="Folk">Folk</option>
                <option value="Singer">Singer</option>
                <option value="Band">Band</option>
                <option value="DJ">DJ</option>
                <option value="Dancer">Dancer</option>
            </select>
            <select className='border-2 border-gray-500 px-4 py-3 w-full outline-none' onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="FeMale">Female</option>
            </select>
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="number" placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)}/>
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="text" placeholder='Enter image url' onChange={(e)=>setImgurl(e.target.value)}/>
        </form>
        <button className='border-2 hover:bg-blue-400 border-blue-400 hover:text-white rounded-sm w-32 py-2'>submit</button>
      </div>
    </div>
  )
}
