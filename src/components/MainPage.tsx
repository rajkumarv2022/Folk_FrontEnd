import React from 'react'

export default function MainPage() {
  return (
    <div>
      <div className='w-full h-screen bg-red-100'>
        <div id='nbar' className='flex flex-col justify-around bg-gray-100 w-full h-40 py-4'>
            <div className='flex flex-row justify-around'>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Folk</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>DJ's</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Singers</button>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Set</button>
            </div>

            <div className='flex flex-row justify-around'>
              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Band</button>

              <div className='flex flex-row items-center w-full max-w-[510px] border-2 border-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-500 lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input className='border-l-2 border-blue-500 w-full h-full outline-none px-4' type="search" placeholder="Search by author"/>
              </div>

              <button className='border text-white rounded-sm w-32 py-2 bg-blue-400'>Profile</button>
            </div>
        </div>
        <div id='main' className='bg-blue-100 w-full h-full'>
            <div id='fnav' className='bg-green-100 w-full h-full max-w-32'></div>

            <div id='content' className='bg-red-100'>

              <div id='prod'>
                
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}
