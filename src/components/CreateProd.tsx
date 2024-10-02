import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateProd() {

  const oid=useParams();
  const seller_id=oid.id;

  const navigate=useNavigate();

  const[name,setName]=useState('');
  const[profession,setProf]=useState('');
  const[gender,setGender]=useState('');
  const[price,setPrice]=useState('');
  const[imgurl,setImgurl]=useState(''); 

  const handlesubmit=async(e: { preventDefault: () => void; })=>{

    e.preventDefault();

    try
    {
        
        if(name==""||profession==""||gender==""||price==""||imgurl=="")
        {
            alert('All fields are required');
            return;
        }

        const response=await axios.post('https://fork_backend.rajkumar-v2022cse.workers.dev/folk/create',{
            seller_id,
            name,
            profession,
            gender,
            price,
            imgurl
        });

        if(response.data=="success")
        {
            alert('successfuly cart created');
            navigate(`/alogin/amain/${seller_id}`);
        }
        else
        {
            alert('Failed to create cart');
        }

    }
    catch(error)
    {
        console.log(error);
    }

  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='flex flex-col gap-8 w-full max-w-[600px] border-2 border-blue-500 h-full max-h-[600px] items-center justify-center bg-gray-200'>
        <h1 className='text-2xl'>Create Product</h1>
        <form onSubmit={handlesubmit} className='flex flex-col gap-8 w-full max-w-[500px]'>
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} required/>
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
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="number" placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} required/>
            <input className='border-2 border-gray-500 px-4 py-3 w-full outline-none' type="text" placeholder='Enter image url' onChange={(e)=>setImgurl(e.target.value)} required/>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <button type='submit' className='border-2 hover:bg-blue-400 border-blue-400 hover:text-white rounded-sm w-32 py-2'>submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}
